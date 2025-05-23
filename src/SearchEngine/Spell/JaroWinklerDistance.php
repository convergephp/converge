<?php

declare(strict_types=1);

namespace Converge\SearchEngine\Spell;

class JaroWinklerDistance
{
    private $threshold = 0.7;

    public function getDistance($str1, $str2)
    {
        $j = $this->jaro($str1, $str2);
        if ($j < $this->threshold) {
            return $j;
        }

        $lengthOfCommonPrefix = 0;
        for ($i = 0; $i < min(mb_strlen($str1), mb_strlen($str2)); $i++) {
            if ($str1[$i] === $str2[$i]) {
                $lengthOfCommonPrefix++;
            } else {
                break;
            }
        }

        $lp = min(0.1, 1 / max(mb_strlen($str1), mb_strlen($str2))) * $lengthOfCommonPrefix;
        $jw = $j + ($lp * (1 - $j));

        return $jw;
    }

    public function jaro($str1, $str2)
    {
        $str1_len = mb_strlen($str1);
        $str2_len = mb_strlen($str2);

        if ($str1_len === 0) {
            return $str2_len === 0 ? 1 : 0;
        }

        $match_distance = max($str1_len, $str2_len) / 2 - 1;

        $str1_matches = array_fill(0, $str1_len, 0);

        $str2_matches = array_fill(0, $str2_len, 0);

        $matches = 0;
        $transpositions = 0;

        for ($i = 0; $i < $str1_len; $i++) {
            $start = (int) max(0, $i - $match_distance);
            $end = (int) min($i + $match_distance + 1, $str2_len);

            for ($k = $start; $k < $end; $k++) {
                if ($str2_matches[$k]) {
                    continue;
                }

                if ($str1[$i] !== $str2[$k]) {
                    continue;
                }

                $str1_matches[$i] = true;
                $str2_matches[$k] = true;
                $matches++;
                break;
            }
        }

        if ($matches === 0) {
            return 0.0;
        }

        $k = 0;
        for ($i = 0; $i < $str1_len; $i++) {
            if (! $str1_matches[$i]) {
                continue;
            }

            while (! $str2_matches[$k]) {
                $k++;
            }

            if ($str1[$i] !== $str2[$k]) {
                $transpositions++;
            }

            $k++;
        }

        $transpositions /= 2.0;

        return (($matches / $str1_len) +
            ($matches / $str2_len) +
            (($matches - $transpositions) / $matches)) / 3.0;
    }
}

<?php

declare(strict_types=1);

namespace Converge\Enums;

enum Interceptor: string
{
    // show pages for markdown files
    case PAGE_START = 'page_start';
    case PAGE_END = 'page_end';

    // logo points
    case AFTER_LOGO = 'after_logo';
    case BEFORE_LOGO = 'before_logo';

    case HEAD_START = 'head_start';
    case HEAD_END = 'head_end';

    case BODY_START = 'body_start';
    case BODY_END = 'body_end';

    case REPLACE_FOOTER = 'replace_footer';

    // sidebar item points
    case BEFORE_SIDEBAR_LINK = 'before_sidebar_link';

    case AFTER_SIDEBAR_LINK = 'after_sidebar_link';

    case BEFORE_SIDEBAR_LABEL = 'before_sidebar_label';

    case AFTER_SIDEBAR_LABEL = 'after_sidebar_label';

    // sidebar group points
    case BEFORE_SIDEBAR_GROUP_LABEL = 'before_sidebar_group_label';

    case AFTER_SIDEBAR_GROUP_LABEL = 'after_sidebar_group_label';

    case BEFORE_SIDEBAR_GROUP_ITEMS = 'before_sidebar_group_items';

    case AFTER_SIDEBAR_GROUP_ITEMS = 'after_sidebar_group_items';

    // sidebar global points
    case SIDEBAR_START = 'sidebar_start';

    case SIDEBAR_END = 'sidebar_end';

    case BEFORE_SIDEBAR_ITEMS = 'before_sidebar_items';

    case AFTER_SIDEBAR_ITEMS = 'after_sidebar_items';

    // sidebar clusters
    case BEFORE_SIDEBAR_CLUSTERS = 'before_sidebar_clusters';

    case AFTER_SIDEBAR_CLUSTERS = 'after_sidebar_clusters';

    // cluster item
    case BEFORE_CLUSTER_ITEM = 'before_cluster_item';

    case BEFORE_CLUSTER_ITEM_LABEL = 'before_cluster_item_label';

    case AFTER_CLUSTER_ITEM_LABEL = 'after_cluster_item_label';

    case AFTER_CLUSTER_ITEM = 'after_cluster_item';

    // CARBON ADS
    case AFTER_TOC_CARBON_ADS = 'after_table_of_content_carbon_ads';

    case FIXED_CARBON_ADS = 'fixed_carbon_ads';

}

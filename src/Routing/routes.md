this file used during the refactoring phase to know excatly what happens 

after refactoring this part I need to make sure the base route is always first then version then cluster (so no absolute path, I need to stay consistent to more contexts into specific parts like lang before version or after cluster)

## 1. Base Module Routes
- Every module has a **raw route path** and a **quieted route path**.
- The module ID is used as the base identifier.

Registered routes:
- `/module-uri/converge/search/enpoint` → handled by `SearchController`
- `/module-uri` → handled by `ModuleController`
- `/module-uri/{url}` → handled by `FileController` (with `.*` as default regex pattern)

---

## 2. Versioned Modules
If a module has versions:

- Each version generates its own URI using the version’s `UrlGenerator`.
- Routes are registered with a **name pattern**:  
  `<moduleId>.<version>`
- If the version has clusters, additional routes are created.

Registered routes for versioned modules:
- `/module/version/converge/search/enpoint`
- `/module/version`
- `/module/version/{url}` (restricted by pattern)

---

## 3. Version + Cluster Routes
If a **version has clusters** (and cluster is not default):

- Cluster-specific routes are generated under the version path.
- Route name pattern:  
  `<moduleId>.<version>.<cluster>`

Registered routes:
- `/module/version/cluster/converge/search/enpoint`
- `/module/version/cluster`
- `/module/version/cluster/{url}`

---

## 4. Cluster-Only Modules (No Versions)
If a module has **clusters without versions**:

- Routes are registered under the quieted module URI.
- Route name pattern:  
  `<moduleId>.<cluster>`

Registered routes:
- `/module/cluster/converge/search/enpoint`
- `/module/cluster`
- `/module/cluster/{url}`

---

## 5. Default Cluster Handling
- Default clusters are **skipped** (no routes are generated for them).

---

## 6. Excluding Versioned Paths
To avoid conflicts, module base routes exclude version paths.

- Exclusion regex:  
  `^(?!({excludedVersions}))(.*)$`

This ensures that `/module/{url}` does not accidentally capture versioned URIs.

---

## 7. Middleware Applied
Each route group applies these middlewares with dynamic parameters:

1. `UseModule:{moduleId}`
2. `UseVersion:{moduleId},{versionId}` (if version exists)
3. `UseCluster:{moduleId},{clusterId}` (if cluster exists)
²
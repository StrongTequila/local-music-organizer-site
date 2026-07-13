# DSD Nexus build used by Local Music Organizer

Component: DSD Nexus 0.1.83 (`dsdctl` plus dynamically linked `libdsd.dylib`)

Target: macOS 13 or later, universal `arm64` and `x86_64`.

The source archive `dsd-nexus-0.1.83-lmo-source.zip` contains the exact source
tree used for this build. It includes two small macOS build corrections:

- the unused FUSE `sacd-vfs` frontend is disabled;
- the `log_printf` compatibility function required by the sequential
  libdsdpcm backend is supplied inline;
- `dsdctl --version` reports the actual LGPL-2.1-or-later license.

The separate `id3dev-with-dependencies-source.zip` contains the exact id3dev,
ByteStream, LinkedListLib, and HashTableLib source trees supplied to CMake.

Build configuration:

```text
-DCMAKE_BUILD_TYPE=Release
-DCMAKE_OSX_ARCHITECTURES=arm64;x86_64
-DCMAKE_OSX_DEPLOYMENT_TARGET=13.0
-DBUILD_SHARED_LIBS=ON
-DBUILD_EXTRAS=ON
-DBUILD_EXAMPLES=OFF
-DBUILD_TESTS=OFF
-DBUILD_PS3DRIVE=OFF
-DDSDPIPE_FETCH_FLAC=OFF
-DDSDPCM_USE_TBB=OFF
-DDSDPCM_USE_STL=OFF
-DDSDPCM_USE_IPP=OFF
```

Only the LGPL command-line converter is used. The GPL Qt GUI (`nexus-forge`)
is not built or distributed. Local Music Organizer keeps `libdsd.dylib` as a
separate replaceable dynamic library in the application bundle.

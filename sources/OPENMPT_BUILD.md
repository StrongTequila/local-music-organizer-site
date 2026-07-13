# OpenMPT renderer build record

Local Music Organizer uses libopenmpt 0.8.7 under the BSD 3-Clause License.
The GPL xmp-cli executable is not included in the application bundle.

## Source

- Archive: `ThirdPartySources/libopenmpt-0.8.7+release.autotools.tar.gz`
- SHA-256: `275c29ef47be9992f62a35fcc96f7ca05c06d2fd05c9298b8dee9f743f75b089`
- Upstream: `https://lib.openmpt.org/`
- Wrapper source: `Helpers/source/openmpt_renderer.cpp`

## Configuration

Both arm64 and x86_64 builds use the macOS SDK supplied with Xcode 26, a
deployment target of macOS 14, static libopenmpt, and the system zlib. Optional
audio-output and compressed-audio dependencies are disabled because the helper
only renders module files to PCM WAV.

The configure options are:

```text
--disable-shared --enable-static --disable-tests --disable-examples
--without-mpg123 --without-ogg --without-vorbis --without-vorbisfile
--without-portaudio --without-portaudiocpp --without-sndfile --without-flac
--without-pulseaudio
```

The two architecture-specific wrapper executables are linked against their
corresponding static `libopenmpt.a`, then combined with `lipo` into
`EmbeddedHelpers/openmpt_renderer`.

## Verification

- Universal architectures: arm64 and x86_64.
- Runtime libraries: system libz, libc++, and libSystem only.
- A real MOD file rendered successfully to stereo PCM WAV, 16-bit, 44.1 kHz.
- The Release app contains `openmpt_renderer` and no xmp executable.

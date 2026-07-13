# Third-Party Software Notices

Local Music Organizer includes command-line audio engines that run locally inside
the application bundle. They do not require Homebrew, Terminal, or a separate
installation.

## FFmpeg and FFprobe 7.1.1

Copyright © FFmpeg contributors.

This build uses FFmpeg under the GNU Lesser General Public License version 2.1
or later. It was built without `--enable-gpl` and without `--enable-nonfree`.
The complete LGPL text is included as `Helpers/licenses/FFmpeg-LGPL-2.1.txt`.

Project: https://ffmpeg.org/

## LAME 3.100

Copyright © The LAME Project and contributors.

The included standalone LAME executable is distributed under the terms provided
in `Helpers/licenses/LAME-COPYING.txt`.

Project: https://lame.sourceforge.io/

## WavPack 5.8.1

Copyright © David Bryant and contributors.

The included `wavpack` and `wvunpack` executables are distributed under the
license in `Helpers/licenses/WavPack-license.txt`.

Project: https://www.wavpack.com/

## DSD Nexus 0.1.83 SACD engine

Copyright © DSD Nexus contributors.

Local Music Organizer includes the LGPL command-line converter and a separately
linked, replaceable `libdsd.dylib`. The GPL Qt GUI is not built or distributed.
The complete LGPL 2.1 text is included as
`Local Music Organizer/Licenses/DSD-Nexus-LGPL-2.1.txt`.

DSD Nexus includes permissively licensed components: id3dev, ByteStream,
LinkedListLib, HashTableLib, tinycsocket, nanopb, and dr_wav. Their notices are
included in the application's Licenses folder.

Project: https://github.com/wichers/dsd-nexus

## libopenmpt 0.8.7 and Local Music Organizer OpenMPT renderer

Copyright © 2004-2026 OpenMPT Project Developers and Contributors.
Copyright © 1997-2003 Olivier Lapicque.

The tracker renderer and libopenmpt are distributed under the BSD 3-Clause
License. Its full text is included as
`Local Music Organizer/Licenses/OpenMPT-BSD-3-Clause.txt`.

Project: https://lib.openmpt.org/

## Source availability

Exact corresponding source archives, build configuration, patches, and hashes
must be published for each released Local Music Organizer build. The prepared
archives and DSD Nexus build notes are in `ThirdPartySources`. A stable HTTPS
source link must be added here and to the product website before submission.

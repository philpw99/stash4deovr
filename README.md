## This a special build of [StashApp](https://github.com/stashapp/stash) for DeoVR, browsers and other video players.

### Why do I need this?
Stash is a wonderful video collection management server. It offers so many great features for you to organize the videos/images whatever the way you want. However, it still misses a crucial feature: serving the files.<p>
Therefore, when you see a beautiful VR video list from Stash:<p>
![Scenes Stash](https://github.com/philpw99/stash4deovr/assets/22040708/4dc5dac3-c66a-4299-911e-fe709ada2712)
You cannot click one and make it play in DeoVR. Because Stash doesn't provide you a way to serve the video file directly.<p>

It's beyond my understanding that the official Stash serves everything from tags, studios, performers to multiple-file entries, but it won't serve the video files directly. The best you can do is using a scene's "stream" link, which doesn't do well in many video players.<p>
For example, in DeoVR, the stream link won't work. In other video players, the stream link will make them regard everything from Stash as the same file. Thus whenever you play a new steam link, the video player will most likely jump to the end, thinking you are playing the last video file.<p>
I tried to create a pull request to Stash 2 years ago. At that time I was really new to the Github and Stash, though the nice mod there did tried to help me with that request, the code itself was not good. So my pull request was just laid there for a few months.
In the end I decided that it's better to create this fork that I can apply my changes and methods. I just need to update the underlying code from time to time.<p>
The benefit is that while I can finally implement the changes, I was also able to make my code shorter and better. Today my added code is actually tiny, but works well with most video players.

### Which video player is compatible with this Stash build?
The list is current not complete, please send me a [message here](https://github.com/philpw99/stash4deovr/discussions), I will add them to it.

 | Player Name | Platform | Browsing | Video Playing | Notes |
 | --- | :---: | :---: | :---: | :--- |
 | DeoVR Player | Windows/Quest | ✔ | ✔ | Browser is small.<br>Need to switch to "wall" view in Stash. |
 | Web Browsers | Windows | ✔ | ✔ | |
 | Oculus Browser | Quest 2/3 | ✔ | ✔ | Browser can be large if you switch to "expand" mode.<br>Supports 3D/VR videos. |
 | PotPlayer | Windows  |  | ✔ | Supports direct "Open Ext." links. |

### Usage
Just replace the stash-win.exe/stash-macos/stash-linux with the one in the release, and you are done.

You can open DeoVR and use the browser to open the Stash webpage, then click on "Open Ext." button to play the VR videos in DeoVR.
![Open Ext button](https://github.com/philpw99/stash4deovr/assets/22040708/b5510478-9ec0-41e1-b1cd-066c5e51c867)

It works both in https or http. It's the most reliable way for DeoVR and Stash to work together.

# Original Readme from Stash

[![Build](https://github.com/stashapp/stash/actions/workflows/build.yml/badge.svg?branch=develop&event=push)](https://github.com/stashapp/stash/actions/workflows/build.yml)
[![Docker pulls](https://img.shields.io/docker/pulls/stashapp/stash.svg)](https://hub.docker.com/r/stashapp/stash 'DockerHub')
[![GitHub Sponsors](https://img.shields.io/github/sponsors/stashapp?logo=github)](https://github.com/sponsors/stashapp)
[![Open Collective backers](https://img.shields.io/opencollective/backers/stashapp?logo=opencollective)](https://opencollective.com/stashapp)
[![Go Report Card](https://goreportcard.com/badge/github.com/stashapp/stash)](https://goreportcard.com/report/github.com/stashapp/stash)
[![Matrix](https://img.shields.io/matrix/stashapp:unredacted.org?logo=matrix&server_fqdn=matrix.org)](https://matrix.to/#/#stashapp:unredacted.org)
[![Discord](https://img.shields.io/discord/559159668438728723.svg?logo=discord)](https://discord.gg/2TsNFKt)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/stashapp/stash?logo=github)](https://github.com/stashapp/stash/releases/latest)
[![GitHub issues by-label](https://img.shields.io/github/issues-raw/stashapp/stash/bounty)](https://github.com/stashapp/stash/labels/bounty)

### **Stash is a self-hosted webapp written in Go which organizes and serves your porn.**
![demo image](docs/readme_assets/demo_image.png)

* Stash gathers information about videos in your collection from the internet, and is extensible through the use of community-built plugins for a large number of content producers and sites.
* Stash supports a wide variety of both video and image formats.
* You can tag videos and find them later.
* Stash provides statistics about performers, tags, studios and more.

Nothing.

You can [watch a SFW demo video](https://vimeo.com/545323354) to see it in action.

For further information you can consult the [documentation](https://docs.stashapp.cc) or [read the in-app manual](ui/v2.5/src/docs/en).

# Installing Stash

<img src="docs/readme_assets/windows_logo.svg" width="100%" height="75"> Windows | <img src="docs/readme_assets/mac_logo.svg" width="100%" height="75"> macOS | <img src="docs/readme_assets/linux_logo.svg" width="100%" height="75"> Linux | <img src="docs/readme_assets/docker_logo.svg" width="100%" height="75"> Docker
:---:|:---:|:---:|:---:
[Latest Release](https://github.com/stashapp/stash/releases/latest/download/stash-win.exe) <br /> <sup><sub>[Development Preview](https://github.com/stashapp/stash/releases/download/latest_develop/stash-win.exe)</sub></sup> | [Latest Release](https://github.com/stashapp/stash/releases/latest/download/Stash.app.zip) <br /> <sup><sub>[Development Preview](https://github.com/stashapp/stash/releases/download/latest_develop/Stash.app.zip)</sub></sup> | [Latest Release (amd64)](https://github.com/stashapp/stash/releases/latest/download/stash-linux) <br /> <sup><sub>[Development Preview (amd64)](https://github.com/stashapp/stash/releases/download/latest_develop/stash-linux)</sub></sup> <br /> [More Architectures...](https://github.com/stashapp/stash/releases/latest) | [Instructions](docker/production/README.md) <br /> <sup><sub>[Sample docker-compose.yml](docker/production/docker-compose.yml)</sub></sup>

Download links for other platforms and architectures are available on the [Releases page](https://github.com/stashapp/stash/releases).

## First Run

#### Windows/macOS Users: Security Prompt

On Windows or macOS, running the app might present a security prompt since the binary isn't yet signed. 

On Windows, bypass this by clicking "more info" and then the "run anyway" button. On macOS, Control+Click the app, click "Open", and then "Open" again.

#### FFmpeg
Stash requires FFmpeg. If you don't have it installed, Stash will download a copy for you. It is recommended that Linux users install `ffmpeg` from their distro's package manager.

# Usage

## Quickstart Guide
Stash is a web-based application. Once the application is running, the interface is available (by default) from http://localhost:9999.

On first run, Stash will prompt you for some configuration options and media directories to index, called "Scanning" in Stash. After scanning, your media will be available for browsing, curating, editing, and tagging.

Stash can pull metadata (performers, tags, descriptions, studios, and more) directly from many sites through the use of [scrapers](https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/docs/en/Manual/Scraping.md), which integrate directly into Stash. Identifying an entire collection will typically require a mix of multiple sources:
- The project maintains [StashDB](https://stashdb.org/), a crowd-sourced repository of scene, studio, and performer information. Connecting it to Stash will allow you to automatically identify much of a typical media collection. It runs on our stash-box software and is primarily focused on mainstream digital scenes and studios. Instructions, invite codes, and more can be found in this guide to [Accessing StashDB](https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/accessing-stashdb/).
- Several community-managed stash-box databases can also be connected to Stash in a similar manner. Each one serves a slightly different niche and follows their own methodology. A rundown of each stash-box, their differences, and the information you need to sign up can be found in this guide to [Accessing Stash-Boxes](https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/accessing-stash-boxes/).
- Many community-maintained scrapers can also be downloaded, installed, and updated from within Stash, allowing you to pull data from a wide range of other websites and databases. They can be found by navigating to Settings -> Metadata Providers -> Available Scrapers -> Community (stable). These can be trickier to use than a stash-box because every scraper works a little differently. For more information, please visit the [CommunityScrapers repository](https://github.com/stashapp/CommunityScrapers).
- All of the above methods of scraping data into Stash are also covered in more detail in our [Guide to Scraping](https://docs.stashapp.cc/beginner-guides/guide-to-scraping/).

<sub>[StashDB](http://stashdb.org) is the canonical instance of our open source metadata API, [stash-box](https://github.com/stashapp/stash-box).</sub>

# Translation
[![Translate](https://hosted.weblate.org/widget/stashapp/stash/svg-badge.svg)](https://hosted.weblate.org/engage/stashapp/)
🇧🇷 🇨🇳 🇩🇰 🇳🇱 🇬🇧 🇪🇪 🇫🇮 🇫🇷 🇩🇪 🇮🇹 🇯🇵 🇰🇷 🇵🇱 🇷🇺 🇪🇸 🇸🇪 🇹🇼 🇹🇷

Stash is available in 25 languages (so far!) and it could be in your language too. We use Weblate to coordinate community translations. If you want to help us translate Stash into your language, you can make an account at [Stash's Weblate](https://hosted.weblate.org/projects/stashapp/stash/) to get started contributing new languages or improving existing ones. Thanks!

# Support (FAQ)

Check out our documentation on [Stash-Docs](https://docs.stashapp.cc) for information about the software, questions, guides, add-ons and more. 

For more help you can:
* Check the in-app documentation, in the top right corner of the app (it's also mirrored on [Stash-Docs](https://docs.stashapp.cc/in-app-manual))
* Join the [Matrix space](https://matrix.to/#/#stashapp:unredacted.org)
* Join the [Discord server](https://discord.gg/2TsNFKt), where the community can offer support.
* Start a [discussion on GitHub](https://github.com/stashapp/stash/discussions)

# Customization

## Themes and CSS Customization
There is a [directory of community-created themes](https://docs.stashapp.cc/user-interface-ui/themes) on Stash-Docs, along with instructions on how to install them.

You can also change the Stash interface to fit your desired style with various snippets from [Custom CSS snippets](https://docs.stashapp.cc/user-interface-ui/custom-css-snippets).

# For Developers

Pull requests are welcome! 

See [Development](docs/DEVELOPMENT.md) and [Contributing](docs/CONTRIBUTING.md) for information on working with the codebase, getting a local development setup, and contributing changes.

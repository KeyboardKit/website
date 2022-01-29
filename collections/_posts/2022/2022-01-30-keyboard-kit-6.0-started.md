---
title:  KeyboardKit 6.0 started
date:   2022-01-30 12:00:00 +0100
tags:   general
---

Work on KeyboardKit 6.0 has begun and is planned to finish later in February. This post explains how you can get started with the new version and start migrating your code, to make the transition as smooth as possible.

First of all, a good idea is to start using the latest release (5.9.1) and fix any deprecation warnings that you may get. Removing deprecated code is the very first thing that 6.0 will do, so make sure that all warnings are fixed before you proceed.

After your code compiles without warnings, you can start testing the new major version in the "v6" feature branch. New features will continously be merged into this branch until we have a release candidate.

During development, the v6 feature branch will most probably have some breaking changes every now and then. These will be described in the release notes, so have a look there for guidance.

KeyboardKit 6.0 will be released later in February.
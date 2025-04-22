---
title:  Replacing services with value builders and view modifiers
date:   2025-04-22 08:00:00 +0100
tags:   general swiftui

image-show: 0
image: /assets/blog/25/0422/image.jpg
assets: /assets/blog/25/0422/

issue: https://github.com/KeyboardKit/KeyboardKit/issues/901

bsky:   https://bsky.app/profile/keyboardkit.bsky.social/post/3lnfxzpskbk25
toot:   https://techhub.social/@keyboardkit/114382282659106554
---

KeyboardKit 9.5 will start experimenting with replacing services with value builders, which will make it a lot easier to customize things like keyboard callouts, layouts and styles.

Today, KeyboardKit uses services for certain namespaces. For instance, a `KeyboardCalloutService` is used to define which callout actions to use, a `KeyboardLayoutService` is used to define the keyboard layout to use and a `KeyboardStyleService` is used to create dynamic button styles.


## How to customize using services

You can customize any service in `Keyboard.Services` to adjust the keyboard behavior. For instance, this would replace the standard `KeyboardCalloutService` with a custom service:

```swift
class CustomCalloutService: KeyboardCallout.StandardCalloutService {
    
    override func calloutActions(for action: KeyboardAction) -> [KeyboardAction] {
        var actions = super.calloutActions(for: action)
        return Array(actions.reversed())
    }
}

class KeyboardViewController: KeyboardInputViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        services.calloutService = CustomCalloutService()
    }
}
```

Since callouts and layouts support multiple locales, KeyboardKit Pro has convenient ways to inject locale-specific service into the main service. For instance, this would customize German callouts:

```swift
class MyCustomGermanService: KeyboardCallout.ProCalloutService.German { ... } 

class KeyboardViewController: KeyboardInputViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        setup(for: ...) { result in
            // Check result to see that setup was successful
            self.services.tryRegisterLocalizedLayoutService(
                try! MyCustomGermanService() 
            )
        }
    }
}
```

This would keep the standard callout service, but replace the one that is used for German callouts.


## Drawbacks with the service-based design

While the service-based system design is very dynamic and well-tested, it lacks in flexibility, since it requires creating a custom service implementation and register it properly.

Services also involves keeping track of service instances and passing them into the view hierarchy if any nested views need them, which risks causing a complicated view structure.

Finally, this way of customizing values is not that common in SwiftUI, where the environment can be used to register values, observable objects, etc.

As such, KeyboardKit will start experimenting with replacing services with value builders, which will make it a lot easier to customize things like keyboard callouts, layouts and styles.


## How to customize using values

To make KeyboardKit more flexible, and to make these kinds of customizations fit SwiftUI better, the first experiment will be to add a value-based alternative to customizing callout actions. 

KeyboardKit 9.5 will add a new `KeyboardCallout.Actions` type and a `.keyboardCalloutActions(...)` view modifier, which can be used to customize the callout actions.

KeyboardKit will provide a basic `KeyboardCallout.Actions.english` value, while KeyboardKit Pro will unlock a callout actions value for every supported type.

To simplify resolving standard actions, `KeyboardCallout.Actions` will have a `standard(for:)` function that creates a standard value for a certain `KeyboardContext`. Furthermore, `KeyboardAction` will have a `standardCalloutActions(for:context:)` extension that creates standard actions for a certain action and context. KeyboardKit will always return `.english` for these, while KeyboardKit Pro returns the proper standard actions for the current locale.

With these additions, you can easily customize the callout actions like this:

```swift
class KeyboardController: KeyboardInputViewController {

    override func viewWillSetupKeyboardView() {
        setupKeyboardView { controller in
            KeyboardView(
                state: controller.state,
                services: controller.services,
                buttonContent: { $0.view },
                buttonView: { $0.view },
                collapsedView: { $0.view },
                emojiKeyboard: { $0.view },
                toolbar: { $0.view }
            )
            // 💡 Setup custom callout actions for the k key.
            .keyboardCalloutActions { action in
                let context = controller.state.keyboardContext
                if action.isCharacterAction(for: "k") {
                    return .init(characters: "keyboardkit")
                }
                return .standardCalloutActions(for: action, context: context)
            }
        }
    }
}
```

The `.keyboardCalloutActions` view modifier will pass down the actions builder into the environment, which means that any sub view can retrieve it with the `.keyboardCalloutActions` environment value.

This approach has been merged into the `v9.5` branch, so you can check out that branch and give it a try in the demo app's open-source keyboard.


## Remaining work

KeyboardKit 9.5 will contain these changes for callout actions, after which KeyboardKit 9.6 will make similar changes for the keyboard layout, if the experiment proves successful and developers like it.

KeyboardKit will then start experimenting with introducing similar builders for various styles, to be able to replace the style service with view modifiers. This involves decoupling many styles and add a separate view modifier for each style.

This will hopefully make KeyboardKit customizations feel more at home in SwiftUI, and make it less complicated to make both smaller and larger changes.


## Service deprecations

KeyboardKit 9.5 will add the callout action value approach without deprecating the existing services.

Since value-based customizations is a new experiment, it will be opt-in through KeyboardKit 9. The environment value defaults to `nil` and KeyboardKit will use the services if there's no injected value.

Like before, the last KeyboardKit 9 version will finally deprecate the services to help you prepare for upgrading to KeyboardKit 10. But that's a later story :)


## Try it out

You can try out these changes in the demo app's open-source keyboard in the `v9.5` branch. They will be available to KeyboardKit Pro in the first 9.5 beta.


## Feedback wanted

Although this change looks very promising, and will remove many complexities that are involved in the service-based approach, your feedback is important. Please [reach out]({{site.urls.email}}) to let us know what you think. Any feedback is highly appreciated.
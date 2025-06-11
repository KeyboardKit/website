{% assign product = include.product %}
{% assign product-escaped = include.product | split: " " | join: "%20" %}
{% assign custom-email = site.urls.email | append: "?subject=" | append: product-escaped | append: "%20-%20Custom%20License%20Request" %}

# {{product}} Terms & Conditions


## Standard Terms & Conditions

These are the Standard Terms & Conditions for the [{{product}}]({{include.url}}) SDK (“the Software”) which is owned and licensed by [Kankoda Sweden AB]({{site.url}}) (“the Licensee").

The standard license is aimed at indies & small businesses. Reach out for a [custom license]({{ custom-email }}) if you’re an enterprise or a company with $10M+ in annual revenue, or the app has $1M+ in annual revenue.


## License Activation

Standard licenses are purchased via [Gumroad]({{ site.urls.gumroad }}) and can be used immediately after purchase, using the unique license key that is provided with the license purchase confirmation.

Custom licenses can be purchased via regular invoicing or any other preferred means of payment, and will typically be activated within two business days after payment has been received.


## License Validation

Standard licenses are validated using network requests. The SDK can handle temporary connectivity loss, but requires regular connectivity for the license to be properly validated.

Yearly higher and custom licenses are encoded into the product and delivered as an encrypted file that is validated on-device, without the need for network-based validation.


## License Expiration

A license expires when its subscription ends, or when the binary or encrypted information expires. This will stop LicenseKit from being used in the related product.

Custom licenses can be configured to customize the license expiration behavior, which allows them to allow a grace period in already shipped version of an app.


## Free Trial

Standard licenses include a free trial with unlimited access to all non-consumption-based features in the selected tier. The trial will automatically convert to a paid plan if it's not cancelled.


## Refunds

The free trial can be cancelled at any time. No refunds will be approved after the free trial ends. All active license subscriptions can be cancelled at any time, and will last through the remaining term.


## Technical Information

{{ product }} targets the current major OS version, and two major versions back (one for macOS). Any support for older OS versions will only be removed in a major version bump.

{{ product }} is built with the latest version of Xcode, but offers on-demand support for the last major version, up to three months after the latest major version was released. 


## Feature Disclaimer

{{ product }} depends on hardware- and operating system capabilities that are provided by Apple and that can be changed or removed at any time, at Apple’s discretion, in ways that may affect the SDK.

Features that stop working due to, but not limited to, such changes, may be removed at any time, without replacement or compensation, since the required capabilities may no longer be available.


## Right to Market

By using this SDK under the Standard License (by signing up for a license after May 30th 2025), you grant {{site.copyright_owner}} a non-exclusive, worldwide, royalty-free right to use your company name, logo, and app name in our marketing materials, case studies, and promotional content. This right includes identifying you as a customer and describing your general use of the SDK. 

You may opt out of this marketing right clause by signing up for a [Custom or Enterprise license]({{include.url}}), which includes the right to specify a custom license agreement. 


## Closed-Source License Agreement

This license agreement applies to the {{ product }} SDK (hereby referred to as "the Software").

The Software and any associated software, documentation and resources  must only be used with a valid license key and a prior written agreement between the licenser and the licensee.

The Software must only be used in application(s) that are included in the license agreement, and must not be distributed to, or used by, individual developers, teams, companies or other parties that are not covered by the license agreement.

Any attempts to bypass, disable or work around these limitations or any other restrictions or security mechanisms in the Software, will be considered as an attempt to violate the license agreement and may terminate the license and render the licenser liable to compensate the licensee for any efforts, damages, loss of IP or any other economic losses caused by the infringement.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT-ABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Laws and Regulations

These terms and conditions are governed by and construed in accordance with Swedish law.

The courts of Sweden shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these terms. The seat of arbitration shall be Stockholm. The language to be used in the arbitral proceedings shall be Swedish. This contract shall be governed by the substantive law of Sweden. The Parties undertake and agree that all arbitral proceedings conducted with reference to this arbitration section will be kept strictly confidential.


## Copyright

Copyright © {{site.copyright_year}} {{site.copyright_owner}}
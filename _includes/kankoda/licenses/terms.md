{% assign product = include.product %}
{% assign product-escaped = include.product | split: " " | join: "%20" %}
{% assign custom-email = site.urls.email | append: "?subject=" | append: product-escaped | append: "%20-%20Custom%20License" %}

## License Terms & Conditions

This page defines the standard Terms & Conditions that apply to {{ product }}'s [standard tiers](/pro).

The standard tiers are aimed at indies, startups & small businesses. Reach out for a [custom license]({{ custom-email }}) if you’re an enterprise, have $10M+ in annual revenue, or if your app has $1M+ in annual revenue.


### License Activation

Licenses that are purchased via [Gumroad]({{ site.urls.gumroad }}) can be used directly after purchase, using the license key in the purchase confirmation. This license key is also available from the subscription screen.

[Custom licenses]({{ custom-email }}) that are purchased via invoice or custom billing, are typically activated within two business days after payment has been received.

### License Validation

Standard licenses are validated with network requests, which requires Full Access. The SDK handles temporary connectivity loss, but requires regular validations to stay validated.

Yearly Gold & Custom licenses are encoded into the binary release and validated on-device, without the need for network-based validation or Full Access.

Yearly Gold & Custom licenses can also request a license file instead of having the license encoded into the binary, to avoid aving to upgrade to the latest version of KeyboardKit Pro.

### License Expiration

A license expires when its subscription ends, or the binary license expires. This will stop the product from being able to use {{ product }} in both development and production.

Custom licenses can be configured to allow license expiration in already shipped version of an app.

### License Cancellation

Standard license subscriptions can be cancelled at any time, and will last through the current term.

Custom licenses can specify any custom license cancellation terms in a custom license agreement.

### License Adjustments

Your license information can be adjusted in a new version of the software binary, if needed. [Reach out]({{ custom-email }}) if you need to adjust your license information.


## Free Trial

Standard licenses include a free trial, with unlimited access to all non-consumption-based features in the selected tier. The free trial will automatically convert to a paid plan if it's not cancelled.


## Refunds

The Free Trial can be cancelled at any time. No refunds will be approved after the Free Trial ends.


## Technical Information

{{ product }} targets the current major OS version, and supports two major versions back (one for macOS). Support for older OS versions is only removed in a major version bump.

{{ product }} is built with the latest version of Xcode, but offers on-demand builds for the last major version, up to three months after the latest major version was released.


## Feature Disclaimer

The SDK depends on hardware- and operating system capabilities that are provided by Apple, that can be changed or removed at any time, at Apple’s discretion.

Features that stop working due to, but not limited to, such changes, may be removed at any time, without replacement or compensation, since the required capabilities may no longer be available.


## Right to market

The standard licenses allow KeyboardKit to use your app or product for marketing purposes. [Reach out]({{ custom-email }}) if you need a custom license to opt-out of KeyboardKit Pro's right to market.


## Closed Source License Agreement

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
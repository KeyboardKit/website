{% assign product = include.product %}
{% assign product-escaped = include.product | split: " " | join: "%20" %}
{% assign custom-email = site.urls.email | append: "?subject=" | append: product-escaped | append: "%20-%20Custom%20License%20Request" %}

# {{ product }} Terms & Conditions

Below are the standard {{ product }} Terms & Conditions. A license is valid for one product, defined by the bundle ID that is provided at the time of purchase.

The standard license is aimed at indies & small businesses. Reach out for a [custom license]({{ custom-email }}) if you’re an enterprise or a company with $10M+ in annual revenue, or the app has $1M+ in annual revenue.


## License Information


### License Activation

Standard licenses that are purchased via [Gumroad]({{ site.urls.gumroad }}) are activated and can be used immediately after purchase, using the unique license key in the license purchase confirmation.

[Custom licenses]({{ custom-email }}) that are purchased via regular invoicing or other means of payment, are activated in a new version of the product, typically within two business days after payment has been received.

### License Validation

Standard licenses are validated using network requests. The SDK can handle temporary connectivity loss, but requires regular connectivity for the license to be properly validated.

Yearly Gold & custom licenses are encoded into the binary product and validated on-device, without the need for network-based validation.

### License Expiration

A license expires when its subscription ends. This will stop the related product from being able to use {{ product }} in both development and production.

Custom licenses can be configured to allow license expiration, which will allow them to be used in already shipped version of an apps, but not in new ones. [Reach out]({{ custom-email }}) if you need a custom license.

### License Adjustments

Your license information can be adjusted in a new version of the software binary, if needed. [Reach out]({{ custom-email }}) if you need to adjust any information in your license.


## Free Trial

Standard licenses include a free trial with unlimited access to all non-consumption-based features in the selected tier. The trial will automatically convert to a paid plan if it's not cancelled.

[Reach out]({{ custom-email }}) if you need a custom license to try out any particular features that are not available in the standard license, before your purchase.


## Refunds

The free trial can be cancelled at any time. No refunds will be approved after the free trial ends. All active license subscriptions can be cancelled at any time, and will last through the remaining term.


## Technical Information

{{ product }} targets the current major OS version, and supports two major versions back (one for macOS). Support for older OS versions is only removed in major version bumps.

{{ product }} is built with the latest version of Xcode, but offers on-demand builds for the last major version, up to three months after the latest major version was released. 


## Feature Disclaimer

The SDK depends on hardware- and operating system capabilities that are provided by Apple and that can be changed or removed at any time, at Apple’s discretion, in ways that may affect the SDK.

Features that stop working due to, but not limited to, such changes, may be removed at any time, without replacement or compensation, since the required capabilities may no longer be available.


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
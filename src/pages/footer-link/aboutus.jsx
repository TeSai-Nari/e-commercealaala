import React ,{Component, Fragment} from 'react'
import { BrowserRouter } from 'react-router-dom';
// import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBTabPane, MDBTabContent,
    MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
class AboutUs extends Component{
    state = {
        items: {
          vertical: "1"
        }
      }
      togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
          let items = { ...this.state.items };
          items[type] = tab;
          this.setState({
            items
          });
        }
      };
      
    render() {
        return (
            <Fragment>
                <MDBContainer>
                    <MDBRow>
                    <MDBCol className='py-5' md="3">
                        <MDBNav pills color="primary" className="flex-column">
                        <MDBNavItem >
                            <MDBNavLink
                            to="/about-us"
                            active={this.state.items["vertical"] === "1"}
                            onClick={this.togglePills("vertical", "1")}
                            >About-Us
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                            to="/terms"
                            active={this.state.items["vertical"] === "2"}
                            onClick={this.togglePills("vertical", "2")}
                            link
                            >
                            Terms of Use
                            <MDBIcon icon="file-alt" className="ml-2" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                            to="/privacy-policy"
                            active={this.state.items["vertical"] === "3"}
                            onClick={this.togglePills("vertical", "3")}
                            >
                            Privacy Policy
                            </MDBNavLink>
                        </MDBNavItem>
                        </MDBNav>
                    </MDBCol>
                    <MDBCol md="9">
                        <MDBTabContent activeItem={this.state.items["vertical"]}>
                        <MDBTabPane tabId="1">
                            <MDBCardBody >
                            <MDBCardTitle>About Us</MDBCardTitle>
                            <MDBCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus aspernatur eum, sit velit sint eos facilis excepturi magnam inventore a at dolores accusantium cupiditate incidunt in, suscipit quo aperiam.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ut amet a deserunt laudantium reprehenderit suscipit dolorum quam tempore. Atque pariatur rem ex tempora corporis minima quod officia voluptatum quisquam.</MDBCardText>
                            </MDBCardBody>
                        </MDBTabPane>
                        <MDBTabPane tabId="2">
                            <MDBCardBody>
                            <MDBCardTitle className='footer-title'>Terms &amp; Conditions</MDBCardTitle>
                            <MDBCardText>
                            <div>Please read these Terms and Conditions (collectively with PT's Privacy Policy and Copyright and Intellectual Property Policy, the "Terms of Service") fully and carefully before using the features, content or applications offered by Petite Theo Inc.("PT" or "we") (together with the Site, the "Services"). These Terms of Service set forth the legally binding terms and conditions for your use of the Site and the Services.</div>
                            <br/>
                            <ol type='1'>
                                <li><b>Acceptance of Terms of Service.</b> 
                                    <ol type='a'>
                                        <li>By registering for and/or using the Services in any manner, including but not limited to visiting or browsing the Site, you agree to these Terms of Service and all other operating rules, policies and procedures that may be published from time to time on the Site by us, each of which is incorporated by reference and each of which may be updated from time to time without notice to you.</li>
                                        <li>Certain of the Services may be subject to additional terms and conditions specified by us from time to time; your use of such Services is subject to those additional terms and conditions, which are incorporated into these Terms of Service by this reference.</li>
                                        <li>These Terms of Service apply to all users of the Services, including, without limitation, users who are contributors of content, information, and other materials or services, registered or otherwise.</li>
                                    </ol>
                                </li>
                                <li>
                                    <b>Eligibility.</b> 
                                    You represent and warrant that you are at least 18 years of age. If you are under age 18, you may not, under any circumstances or for any reason, use the Services. We may, in our sole discretion, refuse to offer the Services to any person or entity and change its eligibility criteria at any time. You are solely responsible for ensuring that these Terms of Service are in compliance with all laws, rules and regulations applicable to you and the right to access the Services is revoked where these Terms of Service or use of the Services is prohibited or to the extent offering, sale or provision of the Services conflicts with any applicable law, rule or regulation. Further, the Services are offered only for your use, and not for the use or benefit of any third party.</li>
                                <li>
                                    <b>Registration.</b>
                                    To sign up for the Services, you must register for an account and create a MoreCommerce profile on the Services (an "Account"). You must provide accurate and complete information and keep your Account information updated. You shall not: (i) select or use as a username a name of another person with the intent to impersonate that person; (ii) use as a username a name subject to any rights of a person other than you without appropriate authorization; or (iii) use, as a username, a name that is otherwise offensive, vulgar or obscene. You are solely responsible for the activity that occurs on your Account, and for keeping your Account password secure. You may never use another person's user account or registration information for the Services without permission. You must notify us immediately of any change in your eligibility to use the Services (including any changes to or revocation of any licenses from state authorities), breach of security or unauthorized use of your Account. You should never publish, distribute or post login information for your Account. You shall have the ability to delete your Account, either directly or through a request made to one of our employees or affiliates. By registering your MoreCommerce Account through a third party service, such as Facebook Connect, you agree to be bound by all applicable policies of such third party service and will act in accordance with them.</li>
                                <li><b>Content</b> 
                                    <ol type='a'>
                                        <li>
                                            <b>Definition.</b>
                                            For purposes of these Terms of Service, the term "Content" includes, without limitation, information, data, text, photographs, videos, audio clips, written posts and comments, software, scripts, graphics, and interactive features generated, provided, or otherwise made accessible on or through the Services. For the purposes of this Agreement, "Content" also includes all User Content (as defined below).</li>
                                        <li>
                                            <b>User Content.</b> =
                                            All Content added, created, uploaded, submitted, distributed, or posted to the Services by users (collectively "User Content"), whether publicly posted or privately transmitted, is the sole responsibility of the person who originated such User Content. You represent that all User Content provided by you is accurate, complete, up-to-date, and in compliance with all applicable laws, rules and regulations. You acknowledge that all Content, including User Content, accessed by you using the Services is at your own risk and you will be solely responsible for any damage or loss to you or any other party resulting therefrom. We do not guarantee that any Content you access on or through the Services is or will continue to be accurate.</li>
                                        <li>
                                            <b>Notices and Restrictions</b> =
                                            The Services may contain Content specifically provided by us, our partners or our users and such Content is protected by copyrights, trademarks, service marks, patents, trade secrets or other proprietary rights and laws. You shall abide by and maintain all copyright notices, information, and restrictions contained in any Content accessed through the Services.</li>
                                        <li>
                                            <b>License Grant.</b> =
                                            By submitting User Content through the Services, you hereby do and shall grant us a worldwide, non-exclusive, perpetual, royalty-free, fully paid, sublicensable and transferable license to use, edit, modify, truncate, aggregate, reproduce, distribute, prepare derivative works of, display, perform, and otherwise fully exploit the User Content in connection with the Site, the Services and our (and our successors' and assigns') businesses, including without limitation for promoting and redistributing part or all of the Site or the Services (and derivative works thereof) in any media formats and through any media channels (including, without limitation, third party websites and feeds), and including after your termination of your Account or the Services. You also hereby do and shall grant each user of the Site and/or the Services a non-exclusive, perpetual license to access your User Content through the Site and/or the Services, and to use, edit, modify, reproduce, distribute, prepare derivative works of, display and perform such User Content, including after your termination of your Account or the Services. For clarity, the foregoing license grants to us and our users does not affect your other ownership or license rights in your User Content, including the right to grant additional licenses to your User Content, unless otherwise agreed in writing. You represent and warrant that you have all rights to grant such licenses to us without infringement or violation of any third party rights, including without limitation, any privacy rights, publicity rights, copyrights, trademarks, contract rights, or any other intellectual property or proprietary rights.</li>
                                        <li>
                                            <b>Availability of Content.</b> =
                                            We do not guarantee that any Content will be made available on the Site or through the Services. We reserve the right to, but do not have any obligation to, (i) remove, edit or modify any Content in our sole discretion, at any time, without notice to you and for any reason (including, but not limited to, upon receipt of claims or allegations from third parties or authorities relating to such Content or if we are concerned that you may have violated these Terms of Service), or for no reason at all and (ii) to remove or block any Content from the Services.</li>
                                    </ol>
                                </li>
                                <li>
                                    <b>Rules of Conduct.</b> 
                                    <ol type='a'>
                                        <li>
                                            As a condition of use, you promise not to use the Services for any purpose that is prohibited by these Terms of Use. You are responsible for all of your activity in connection with the Services.
                                        </li>
                                        <li>
                                            You shall not (and shall not permit any third party to) either (a) take any action or (b) upload, download, post, submit or otherwise distribute or facilitate distribution of any Content on or through the Service, including without limitation any User Content, that:
                                            <ol type='i'>
                                                <li>
                                                    infringes any patent, trademark, trade secret, copyright, right of publicity or other right of any other person or entity or violates any law or contractual duty (see our Copyright Policy);
                                                </li>
                                                <li>
                                                    you know is false, misleading, untruthful or inaccurate;
                                                </li>
                                                <li>
                                                    is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, obscene, vulgar, pornographic, offensive, profane, contains or depicts nudity, contains or depicts sexual activity, or is otherwise inappropriate as determined by us in our sole discretion;
                                                </li>
                                                <li>
                                                    constitutes unauthorized or unsolicited advertising, junk or bulk e-mail ("spamming");
                                                </li>
                                                <li>
                                                    contains software viruses or any other computer codes, files, or programs that are designed or intended to disrupt, damage, limit or interfere with the proper function of any software, hardware, or telecommunications equipment or to damage or obtain unauthorized access to any system, data, password or other information of ours or of any third party;
                                                </li>
                                                <li>
                                                    impersonates any person or entity, including any of our employees or representatives; or
                                                </li>
                                                <li>
                                                    includes anyone's identification documents or sensitive financial information.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            You shall not: (i) take any action that imposes or may impose (as determined by us in our sole discretion) an unreasonable or disproportionately large load on our (or our third party providers') infrastructure; (ii) interfere or attempt to interfere with the proper working of the Services or any activities conducted on the Services; (iii) bypass, circumvent or attempt to bypass or circumvent any measures we may use to prevent or restrict access to the Services (or other accounts, computer systems or networks connected to the Services); (iv) run any form of auto-responder or "spam" on the Services; (v) use manual or automated software, devices, or other processes to "crawl" or "spider" any page of the Site; (vi) harvest or scrape any Content from the Services; or (vii) otherwise take any action in violation of our guidelines and policies.
                                        </li>
                                        <li>
                                            You shall not (directly or indirectly): (i) decipher, decompile, disassemble, reverse engineer or otherwise attempt to derive any source code or underlying ideas or algorithms of any part of the Services (including without limitation any application), except to the limited extent applicable laws specifically prohibit such restriction, (ii) modify, translate, or otherwise create derivative works of any part of the Services, or (iii) copy, rent, lease, distribute, or otherwise transfer any of the rights that you receive hereunder. You shall abide by all applicable local, state, national and international laws and regulations.
                                        </li>
                                        <li>
                                            If you use scripts, bots or any fraudulent means to obtain discounts, including but not limited to setting up fake accounts or creating more than one Account per household, those discounts will not be honored and MoreCommerce MAY PROSECUTE YOU TO THE FULL EXTENT OF THE LAW. If discounts are granted as a result of you purchasing a product and you cancel that order, your discounts will be revoked. If discounts are granted as a result of you purchasing a product and then you return that item, your refund will be the difference minus the discounts you obtained from purchasing that product. Moreover, if you attempt to obtain discounts by placing orders and then canceling or returning those or parts of those orders, your discounts will not be honored. We reserve the right, in our sole discretion, to not honor discounts for any reason whatsoever, including without limitation situations where you have not obtained discounts in good faith or in compliance with these Terms of Service or the spirit thereof as determined by PetiteTheo. 
                                        </li>
                                        <li>
                                            We also reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process or governmental request, (ii) enforce these Terms of Service, including investigation of potential violations hereof, (iii) detect, prevent, or otherwise address fraud, security or technical issues, (iv) respond to user support requests, or (v) protect the rights, property or safety of us, our users and the public.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <b>Third Party Services.</b>
                                    The Services may permit you to link to other websites, services or resources on the Internet, and other websites, services or resources may contain links to the Services. When you access third party resources on the Internet, you do so at your own risk. These other resources are not under our control, and you acknowledge that we are not responsible or liable for the content, functions, accuracy, legality, appropriateness or any other aspect of such websites or resources. The inclusion of any such link does not imply our endorsement or any association between us and their operators. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such website or resource.
                                </li>
                                <li>
                                    <b>Payments and Billing</b> 
                                    <ol type='a'>
                                        <li> 
                                            <b>Payments</b>
                                            We use a third-party payment processor (the "Payment Processor") to bill you through a payment account linked to your Account on the Services (your "Billing Account") for any purchases made through the Services. The processing of payments will be subject to the terms, conditions and privacy policies of the Payment Processor in addition to this Agreement. We are not responsible for error by the Payment Processor. By choosing to purchase items through the Services, you agree to pay us, through the Payment Processor, all charges at the prices then in effect for your purchase in accordance with the applicable payment terms and you authorize us, through the Payment Processor, to charge your chosen payment provider (your "Payment Method"). You agree to make payment using that selected Payment Method. We reserve the right to correct any errors or mistakes that it makes even if it has already requested or received payment.                      
                                        </li>
                                        <li>
                                            <b>Payment Method</b>
                                            The terms of your payment will be based on your Payment Method and may be determined by agreements between you and the financial institution, credit card issuer or other provider of your chosen Payment Method. If we, through the Payment Processor, do not receive payment from you, you agree to pay all amounts due on your Billing Account upon demand.                            
                                        </li>
                                        <li>
                                            <b>Current Information Required.</b>
                                            You must provide current, complete and accurate information for your billing account. You must promptly update all information to keep your billing account current, complete and accurate (such as change in billing address, credit card number, or credit card expiration date), and you must promptly notify us or our payment processor if your payment method is canceled (e.g. for loss or theft) or if you become aware of a potential breach of security, such as the unauthorized disclosure or use of your name or password.                            
                                        </li>
                                        <li>                                
                                            <b>Typographical Errors.</b>
                                            In the event that a product listed on the Services is mistakenly listed at an incorrect price, PetiteTheo reserves the right to refuse or cancel any orders placed for product listed at the incorrect price. PetiteTheo reserves the right to refuse or cancel any such orders whether or not the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is canceled, PetiteTheo shall issue a credit to your credit card account in the amount of the incorrect price.
                                        </li>
                                        <li>
                                            <b>Typographical Errors.</b>
                                            All items purchased through the Site are made pursuant to a shipment contract with the supplier. This means that the risk of loss and title for such items pass to you upon delivery from PetiteTheo's supplier to the carrier.                            
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <b>Termination and Deactivation.</b>
                                    We may terminate your access to all or any part of the Services at any time, with or without cause, with or without notice, effective immediately, which may result in the forfeiture and destruction of all information associated with your membership. If you wish to terminate your Account, you may do so by following the instructions on the Site or through the Services. Any fees paid hereunder are non-refundable. All provisions of these Terms of Service which by their nature should survive termination shall survive termination, including, without limitation, licenses of User Content, ownership provisions, warranty disclaimers, indemnity and limitations of liability. MoreCommerce may temporarily deactivate​ your account​ at any time​. In an effort to foster a trustworthy community and uphold the Terms of Service, your account may be deactivated during a review of ​MoreCommerce accounts​. As a result, ​​you may not be able to access the platform, your account or content, or receive assistance from PetiteTheo Customer Support.​
                                </li>
                                <li>
                                    <b>Warranty Disclaimer.</b>
                                    <ol type='a'>
                                        <li>
                                            We have no special relationship with or fiduciary duty to you. You acknowledge that We have no duty to take any action regarding:
                                        </li>
                                        <ol type='i'>
                                            <li>which users gain access to the Services;</li>
                                            <li>what Content you access via the Services; or</li>
                                            <li>how you may interpret or use the Content.</li>
                                        </ol>
                                        <li>
                                            You release us from all liability for you having acquired or not acquired Content through the Services. We make no representations concerning any Content contained in or accessed through the Services, and we will not be responsible or liable for the accuracy, copyright compliance, or legality of material or Content contained in or accessed through the Services.
                                        </li>
                                        <li>
                                            THE SERVICES AND CONTENT ARE PROVIDED "AS IS", "AS AVAILABLE" AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED. WE, AND OUR DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, PARTNERS AND CONTENT PROVIDERS DO NOT WARRANT THAT: (I) THE SERVICES WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (II) ANY DEFECTS OR ERRORS WILL BE CORRECTED; (III) ANY CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE SERVICES IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (IV) THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS. YOUR USE OF THE SERVICES IS SOLELY AT YOUR OWN RISK.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <b>Indemnification.</b>
                                    You shall defend, indemnify, and hold harmless us, our affiliates and each of our and their respective employees, contractors, directors, suppliers and representatives from all liabilities, claims, and expenses, including reasonable attorneys' fees, that arise from or relate to your use or misuse of, or access to, the Services, Content, or otherwise from your User Content, violation of these Terms of Service, or infringement by you, or any third party using your Account or identity in the Services, of any intellectual property or other right of any person or entity. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will assist and cooperate with us in asserting any available defenses.                    
                                </li>
                                <li>
                                    <b>Governing Law and Jurisdiction.</b>
                                    IN NO EVENT SHALL WE, NOR OUR DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS OR CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO THE SERVICES (I) FOR ANY LOST PROFITS, DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, COMPENSATORY OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER, SUBSTITUTE GOODS OR SERVICES (HOWEVER ARISING), (II) FOR ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGINATION), OR (III) FOR ANY DIRECT DAMAGES IN EXCESS OF (IN THE AGGREGATE) OF THE GREATER OF (A) FEES PAID TO US FOR THE PARTICULAR SERVICES DURING THE IMMEDIATELY PREVIOUS THREE (3) MONTH PERIOD OR (B) 80 MILLION RUPIAH
                                </li>
                                <li>
                                    <b>Limitation of Liability.</b>
                                    These Terms of Service shall be governed by and construed in accordance with the laws of Indonesia, including its conflicts of law rules. You agree that any dispute arising from or relating to the subject matter of these Terms of Service shall be governed by the exclusive jurisdiction and venue of the state and Federal courts of Indonesia.
                                </li>
                                <li>
                                    <b>Modification. </b>
                                    We reserve the right, in our sole discretion, to modify or replace any of these Terms of Service, or change, suspend, or discontinue the Services (including without limitation, the availability of any feature, database, or content) at any time by posting a notice on the Site or by sending you notice through the Services, via e-mail or by another appropriate means of electronic communication. We may also impose limits on certain features and services or restrict your access to parts or all of the Services without notice or liability. While we will timely provide notice of modifications, it is also your responsibility to check these Terms of Service periodically for changes. Your continued use of the Services following notification of any changes to these Terms of Service constitutes acceptance of those changes.                    
                                </li>
                            </ol>
                            <p><b>Contact </b>
                            You may contact us at the following address: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos enim soluta incidunt nihil possimus molestias labore amet quas iste. At, quibusdam pariatur saepe dignissimos tenetur molestias facere voluptas optio quod.</p>
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBTabPane>
                        <MDBTabPane tabId="3">
                            <MDBCardBody>
                            <MDBCardTitle>Privacy</MDBCardTitle>
                            <MDBCardText>
                            <div className='blog'>
                                    <p>This Privacy Policy covers the use of the The PetiteTheo, Inc. websites and the services provided by The PetiteTheo, Inc. Pursuant to PetiteTheo's Terms and Conditions, you must be 18 years or older to use this Site or have permission from a legal guardian. Therefore, this policy makes no provision for individuals under 18 years old. This policy does not apply to the practices of third parties that PetiteTheo does not own or control, or individuals that PetiteTheo does not employ or manage.</p>
                                    <p>This policy covers our US online experiences including our websites and mobile apps (collectively “Site”) and other webpages and services which we operate and in which we post a direct link to this policy. Our policy also describes the choices you can make about how we collect and use your information.</p>
                                </div>
                                <h3>What information do we collect?</h3>
                                <ul>
                                    <li>We collect information from you when you register on the Site, place an order, enter a contest or sweepstakes, respond to a survey or communication such as e-mail, or participate in another Site feature.</li>
                                    <li>When ordering or registering, we may ask you for your name, e-mail address, mailing address, phone number, credit card information or other information. You may, however, visit our Site anonymously.</li>
                                    <li>Like many websites, we use "cookies" to enhance your experience and gather information about visitors and visits to our Site. Please refer to the "Do we use 'cookies'?" section below for information about cookies and how we use them.</li>
                                    <li>When you create a PetiteTheo's account, you will provide information that could be personally identifiable information, such as your username, password and email address. You acknowledge that this information may be personal to you, and by creating an account on the Site and providing personal information to us, you allow others, including us, to identify you and therefore may not be anonymous. We may use your contact information to send you information about our services, but only in accordance with your contact preferences (which may be modified as described below). Regardless of your contact preferences, we reserve the right to contact you when we believe it is necessary, such as for account recovery purposes.</li>
                                    <li>In conjunction with your PetiteTheo's account, we also display your PetiteTheo's profile on the Site. All content submitted by you to the Site may be retained by us indefinitely, even after you terminate your PetiteTheo's account. We may continue to disclose such content to third parties in a manner that does not reveal personally identifiable information, as described in this Privacy Policy.</li>
                                    <li>We automatically receive and record information from your web browser when you interact with the Site, including your IP address and cookie information. This information is used for fighting spam/malware and also to facilitate collection of data concerning your interaction with the Site (e.g., what links you have clicked on).</li>
                                    <li>Generally, the Site automatically collects usage information, such as the number and frequency of visitors to the Site. We may use this data in aggregate form, that is, as a statistical measure, but not in a manner that would identify you personally. This type of aggregate data enables us and third parties authorized by us to figure out how often individuals use parts of the Services so that we can analyze and improve them.</li>
                                    <li>We do not currently collect financial information, such as your payment method (valid credit card number, type, expiration date or other financial information); that information is collected and stored by our third party payment processing company (the "Payment Processor"), and use and storage of that information is governed by the Payment Processor's applicable terms of service and privacy policy.</li>
                                </ul>
                                <h3>How do we use your information?</h3>
                                <p>We may use the information we collect from you when you register, purchase products, enter a contest or promotion, respond to a survey or marketing communication, surf the Site, or use certain other Site features in the following ways:</p>
                                <ul>
                                    <li>To personalize your Site experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                                    <li>To allow us to better service you in responding to your customer service requests.</li>
                                    <li>To quickly process your transactions.</li>
                                    <li>To administer a contest, promotion, survey or other Site feature.</li>
                                    <li>If you have opted-in to receive our e-mail newsletter, we may send you periodic e-mails. If you would no longer like to receive promotional e-mail from us, please refer to the "How can you opt-out, remove or modify information you have provided to us?" section below. If you have not opted-in to receive e-mail newsletters, you will not receive these e-mails. Visitors who register or participate in other Site features such as marketing programs and 'members-only' content will be given a choice whether they would like to be on our e-mail list and receive e-mail communications from us.</li>
                                </ul>
                                <h3>How do we protect visitor information?</h3>
                                <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. When you place orders or access your personal information, we use a secure server. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our databases to be only accessed as stated above.</p>
                                <h3>Public Information about Your Activity on the Site</h3>
                                <p>Some of your activity on and through the Site is public by default. This may include, but is not limited to, content you have posted publicly on your MoreCommerce profile or otherwise on or through the Site. Users may have some of this information associated with their MoreCommerce accounts.</p>
                                <br/>
                                <p>Please also remember that if you choose to provide any personally identifiable information using certain public features of the Site, then that information is governed by the privacy settings of those particular features and may be publicly available. Individuals reading such information may use or disclose it to other individuals or entities without our control and without your knowledge, and search engines may index that information. We therefore urge you to think carefully about including any specific information you may deem private in content that you create or information that you submit through the Site.</p>
                                <h3>Do we use "cookies"?</h3>
                                <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current Site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about Site traffic and Site interaction so that we can offer better Site experiences and tools in the future.</p>
                                <br/>
                                <p>We may contract with third-party service providers to assist us in better understanding our Site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.</p>
                                <br/>
                                <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Google Chrome or Internet Explorer) settings. Each browser is a little different, so look at your browser Help menu to learn the correct way to modify your cookies. If you turn cookies off, you won't have access to many features that make your Site experience more efficient and some of our services will not function properly.</p>
                                <br/>
                                <p>The information we collect through the use of cookies is used to improve the usefulness and efficiency of your use of the Site, and is sometimes used to enhance the reliability and performance of the Site. Examples include maintaining lists of products that you have placed in your shopping cart during a visit to the Site, and IP addresses of Site visitors. In no case does MoreCommerce collect personally-identifiable information through cookies or any other tracking technology.</p>
                                <h3>Do we disclose the information we collect to outside parties?</h3>
                                <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice, except as described below. The term "outside parties" does not include MoreCommerce suppliers. It also does not include website hosting partners and other parties who assist us in operating the Site, conducting our business, or servicing you to the extent related to fulfilling our services. We may also release your information when we believe release is appropriate to comply with the law, enforce our Site policies, or protect ours or others' rights, property, or safety.</p>
                                <br/>
                                <p>We may contract with third-party service providers to assist us in better understanding our Site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.</p>
                                <br/>
                                <p>We routinely share the names, e-mail addresses, and purchases of customers who have made purchases at MoreCommerce with the suppliers with whom we are affiliated. Our suppliers - who as our partners maintain various content websites leading to MoreCommerce - maintain your personally-identifiable information under standards that are consistent with our standards.</p>
                                <br/>
                                <p>Non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
                                <h3>How can you opt-out, remove or modify information you have provided to us?</h3>
                                <p>To modify your e-mail subscriptions, please let us know by modifying your preferences in the "My Account" section. Please note that due to email production schedules you may receive any emails already in production.</p>
                                <br/>
                                <p>To delete all of your online account information from our database, sign into the "My Account" section of our Site and remove your shipping addresses, billing addresses and payment information. Please note that we may maintain information about an individual sales transaction in order to service that transaction and for record keeping.</p>
                                <h3>Third party links</h3>
                                <div>In an attempt to provide you with increased value, we may include third party links on our Site. These linked sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our Site and welcome any feedback about these linked sites (including if a specific link does not work).</div>
                                <br/>
                                <div>Our service may also incorporate content from third party websites, such as Facebook. One such service may include the ability for you to automatically transmit information (such as items you "Love" on PetiteTheo) from your PetiteTheo account to an account on a third party website or service. We have no control over the policies and practices of third party websites or businesses as to privacy or anything else, so if you choose to take part in any transaction or service relating to an affiliated website or business, please review all such business' or websites' policies. In order to link your PetiteTheo account with any third party account, we may ask you for account information for those services. If you provide your third party account credentials to us, you understand that content and/or information in those accounts may be transmitted into your account with us, and that third party account information transmitted to our Site is covered by this Privacy Policy. We don't actually store your passwords for those third party accounts. Instead, we just use an authentication token to verify your user name.</div>
                                <h3>Changes to our policy</h3>
                                <div>If our information practices change, we will post an updated policy on our website. You can tell if the policy has changed by checking the revision date that appears above. If we change the policy in a material way, we will provide appropriate notice to you. You may exercise your choices about how we collect and use your information consistent with this policy at any time.</div>
                                <h3>Your Consent</h3>
                                <div>By using our Site, you consent to our privacy policy.
                                    </div>                    
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBTabPane>
                        </MDBTabContent>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Fragment>
        )}
    }









            {/* <div className="row">
                <div className="col-md-4">
                    <BrowserRouter>
                        <MDBNav className="flex-column">
                            <MDBNavLink active to="/about-us">About Us</MDBNavLink>
                            <MDBNavLink to="/terms" link>Terms of Use</MDBNavLink>
                            <MDBNavLink to="/privacy-policy" link>Privacy Policy</MDBNavLink>
                        </MDBNav>
                    </BrowserRouter>
                </div>
                <div className="col-md-8 bg-warning px-5">
                    <h1>About Us</h1>
                    <hr/>
                    <div>Buat scroll left dari about us sampai privacy policy</div>
                    <br/>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus aspernatur eum, sit velit sint eos facilis excepturi magnam inventore a at dolores accusantium cupiditate incidunt in, suscipit quo aperiam.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ut amet a deserunt laudantium reprehenderit suscipit dolorum quam tempore. Atque pariatur rem ex tempora corporis minima quod officia voluptatum quisquam.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus aspernatur eum, sit velit sint eos facilis excepturi magnam inventore a at dolores accusantium cupiditate incidunt in, suscipit quo aperiam.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ut amet a deserunt laudantium reprehenderit suscipit dolorum quam tempore. Atque pariatur rem ex tempora corporis minima quod officia voluptatum quisquam.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus aspernatur eum, sit velit sint eos facilis excepturi magnam inventore a at dolores accusantium cupiditate incidunt in, suscipit quo aperiam.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ut amet a deserunt laudantium reprehenderit suscipit dolorum quam tempore. Atque pariatur rem ex tempora corporis minima quod officia voluptatum quisquam.</div>
                </div>
            </div> */}
export default AboutUs;
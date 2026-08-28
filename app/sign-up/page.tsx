import { definePage, metadataFor } from "@/lib/page";

const ROUTE = "/sign-up";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Sign Up - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{text-transform:uppercase;}" }} />
<div className="uk-section-default uk-section">
                                <div className="uk-container uk-container-small">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1@m">
<form noValidate={true} action="https://etiedu.org/component/ajax?p=/yooessentials/form&option=com_ajax&style=13" method="POST" data-uk-ye-form={"{\"settings\":{\"html5validation\":true,\"reset_after_submit\":true,\"errors_display\":{}}}"} data-form-id="ec08ee2a-da04a06f" data-tokens-url="/component/ajax?p=/yooessentials/form/tokens&option=com_ajax&style=13" className="uk-margin">
<div className="uk-grid-margin uk-grid tm-grid-expand">
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-tile-muted uk-tile">    
<h1 className="uk-h2">
                    {c.t("s.5.1.1.1.1.1.1.1.1.h1", "Get Started")}        
</h1><div className="uk-panel uk-text-lead uk-margin">{c.t("s.5.1.1.1.1.1.1.1.2.div", "Complete the form below to take the first step toward building a strong future in the electrical industry. For reporting purposes only.")}</div><div className="uk-panel uk-text-small uk-text-danger uk-margin"><p style={{ textAlign: "center" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.3.0.p", "<em>*Fields that are required</em>") }} /></div>
<h1 className="uk-h5 uk-heading-line uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.5.h1", "<span class=\"uk-text-background\">    \n        \n                    Personal Information        \n        \n        </span>") }} />
<div className="uk-margin">
        <div className="uk-flex-middle uk-grid-small uk-child-width-1-2@m" uk-grid="">    
                <div className="el-item">
<div data-ye-form-field="First_Name"><div className="uk-form-controls">
        <input className="uk-input uk-form-large" id="First_Name" type="text" name="First_Name" required={true} autoFocus={true} minLength={3} placeholder="First Name*" aria-label="First Name" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
                <div className="el-item">
<div data-ye-form-field="Last_Name"><div className="uk-form-controls">
        <input className="uk-input uk-form-large" id="Last_Name" type="text" name="Last_Name" required={true} placeholder="Last Name*" aria-label="Last Name" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
        </div>
</div>
<div className="uk-margin">
<fieldset data-ye-form-field="Age" style={{ borderWidth: "0", margin: "0", padding: "0" }}><legend className="uk-form-label" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.9.1.0.legend", "What is your age range? <span>*</span>") }} /><div className="uk-form-controls">
        <label className="uk-flex uk-margin-right" htmlFor="Age_18-24">        <div><input id="Age_18-24" type="radio" name="Age" required={true} className="uk-radio" value="18-24" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.9.1.1.1.3.div", "18-24")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Age_25-34">        <div><input id="Age_25-34" type="radio" name="Age" required={true} className="uk-radio" value="25-34" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.9.1.1.3.3.div", "25-34")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Age_35-44">        <div><input id="Age_35-44" type="radio" name="Age" required={true} className="uk-radio" value="35-44" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.9.1.1.5.3.div", "35-44")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Age_45-54">        <div><input id="Age_45-54" type="radio" name="Age" required={true} className="uk-radio" value="45-54" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.9.1.1.7.3.div", "45-54")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Age_55+">        <div><input id="Age_55+" type="radio" name="Age" required={true} className="uk-radio" value="55+" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.9.1.1.9.3.div", "55+")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Age_Prefer not to answer">        <div><input id="Age_Prefer not to answer" type="radio" name="Age" required={true} className="uk-radio" value="Prefer not to answer" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.9.1.1.11.3.div", "Prefer not to answer")}</div>
        </label>
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></fieldset>
</div>
<div className="uk-margin">
<fieldset data-ye-form-field="Gender" style={{ borderWidth: "0", margin: "0", padding: "0" }}><legend className="uk-form-label" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.11.1.0.legend", "What is your gender identity? <span>*</span>") }} /><div className="uk-form-controls">
        <label className="uk-flex uk-margin-right" htmlFor="Gender_Woman">        <div><input id="Gender_Woman" type="radio" name="Gender" required={true} className="uk-radio" value="Woman" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.11.1.1.1.3.div", "Woman")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Gender_Man">        <div><input id="Gender_Man" type="radio" name="Gender" required={true} className="uk-radio" value="Man" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.11.1.1.3.3.div", "Man")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Gender_Non-binary / Third gender">        <div><input id="Gender_Non-binary / Third gender" type="radio" name="Gender" required={true} className="uk-radio" value="Non-binary / Third gender" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.11.1.1.5.3.div", "Non-binary / Third gender")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Gender_Prefer to self-describe">        <div><input id="Gender_Prefer to self-describe" type="radio" name="Gender" required={true} className="uk-radio" value="Prefer to self-describe" /></div>
        <div className="uk-margin-small-left" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.11.1.1.7.3.div", "Prefer to self-describe <em><small>(Please use field below.)</small></em>") }} />
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Gender_Prefer not to answer">        <div><input id="Gender_Prefer not to answer" type="radio" name="Gender" required={true} className="uk-radio" value="Prefer not to answer" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.11.1.1.9.3.div", "Prefer not to answer")}</div>
        </label>
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></fieldset>
</div>
<div className="uk-margin">
<div data-ye-form-field="Self_Describe"><div className="uk-form-controls">
        <input className="uk-input uk-form-width-large" id="Self_Describe" type="text" name="Self_Describe" placeholder="Self-Describe" aria-label="Self-Describe" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
</div>
<div className="uk-margin">
<fieldset data-ye-form-field="Race" style={{ borderWidth: "0", margin: "0", padding: "0" }}><legend className="uk-form-label" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.15.1.0.legend", "Which race or ethnicity best describes you? <span>*</span>") }} /><div className="uk-form-controls">
        <label className="uk-flex uk-margin-right" htmlFor="Race_American Indian or Alaskan Native">        <div><input id="Race_American Indian or Alaskan Native" type="radio" name="Race" required={true} className="uk-radio" value="American Indian or Alaskan Native" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.15.1.1.1.3.div", "American Indian or Alaskan Native")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Race_Asian / Pacific Islander">        <div><input id="Race_Asian / Pacific Islander" type="radio" name="Race" required={true} className="uk-radio" value="Asian / Pacific Islander" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.15.1.1.3.3.div", "Asian / Pacific Islander")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Race_Black or African American">        <div><input id="Race_Black or African American" type="radio" name="Race" required={true} className="uk-radio" value="Black or African American" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.15.1.1.5.3.div", "Black or African American")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Race_Hispanic">        <div><input id="Race_Hispanic" type="radio" name="Race" required={true} className="uk-radio" value="Hispanic" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.15.1.1.7.3.div", "Hispanic")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Race_Multiple Ethnicity / Other">        <div><input id="Race_Multiple Ethnicity / Other" type="radio" name="Race" required={true} className="uk-radio" value="Multiple Ethnicity / Other" /></div>
        <div className="uk-margin-small-left" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.15.1.1.9.3.div", "Multiple Ethnicity / Other <small><em>(Please specify in the field below.)</em></small>") }} />
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Race_White / Caucasian">        <div><input id="Race_White / Caucasian" type="radio" name="Race" required={true} className="uk-radio" value="White / Caucasian" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.15.1.1.11.3.div", "White / Caucasian")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Race_Prefer not to answer">        <div><input id="Race_Prefer not to answer" type="radio" name="Race" required={true} className="uk-radio" value="Prefer not to answer" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.15.1.1.13.3.div", "Prefer not to answer")}</div>
        </label>
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></fieldset>
</div>
<div className="uk-margin">
<div data-ye-form-field="Other_Ethnicity"><div className="uk-form-controls">
        <input className="uk-input uk-form-width-large" id="Other_Ethnicity" type="text" name="Other_Ethnicity" placeholder="Other Ethnicity" aria-label="Other Ethnicity" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
</div>
<div className="uk-margin">
    <div data-ye-form-field="Program"><label className="uk-form-label" htmlFor="Program" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.19.1.0.label", "Which program are you interested in? <span>*</span>") }} /><div className="uk-form-controls">
        <select className="uk-select uk-form-width-large" id="Program" name="Program" required={true}>
                <option disabled={true} selected={true} value="">Choose One</option>
                <option value="Inside Wireman">Inside Wireman</option>
                <option value="Sound & Communication">Sound & Communication</option>
                <option value="Intelligent Transportation Systems">Intelligent Transportation Systems</option>
                <option value="Electrician Trainees">Electrician Trainees</option>
                <option value="Other - Please explain in the field below.">Other - Please explain in the field below.</option>
        </select>
    </div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
</div>
<div className="uk-margin">
<div data-ye-form-field="Other_Programs"><div className="uk-form-controls">
        <input className="uk-input" id="Other_Programs" type="text" name="Other_Programs" placeholder="Other Programs" aria-label="Other Programs" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
</div>
<div className="uk-margin">
<fieldset data-ye-form-field="Hear_About" style={{ borderWidth: "0", margin: "0", padding: "0" }}><legend className="uk-form-label" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.23.1.0.legend", "How did you hear about ETI? <span>*</span>") }} /><div className="uk-form-controls">
        <label className="uk-flex uk-margin-right" htmlFor="Hear_About_Outreach Event">        <div><input id="Hear_About_Outreach Event" type="radio" name="Hear_About" required={true} className="uk-radio" value="Outreach Event" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.23.1.1.1.3.div", "Outreach Event")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Hear_About_Career Fair">        <div><input id="Hear_About_Career Fair" type="radio" name="Hear_About" required={true} className="uk-radio" value="Career Fair" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.23.1.1.3.3.div", "Career Fair")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Hear_About_Family Member">        <div><input id="Hear_About_Family Member" type="radio" name="Hear_About" required={true} className="uk-radio" value="Family Member" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.23.1.1.5.3.div", "Family Member")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Hear_About_Current IBEW Member">        <div><input id="Hear_About_Current IBEW Member" type="radio" name="Hear_About" required={true} className="uk-radio" value="Current IBEW Member" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.23.1.1.7.3.div", "Current IBEW Member")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Hear_About_Word of Mouth">        <div><input id="Hear_About_Word of Mouth" type="radio" name="Hear_About" required={true} className="uk-radio" value="Word of Mouth" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.23.1.1.9.3.div", "Word of Mouth")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Hear_About_Searching Internet">        <div><input id="Hear_About_Searching Internet" type="radio" name="Hear_About" required={true} className="uk-radio" value="Searching Internet" /></div>
        <div className="uk-margin-small-left">{c.t("s.5.1.1.1.1.1.1.1.23.1.1.11.3.div", "Searching Internet")}</div>
        </label>
        <label className="uk-flex uk-margin-right" htmlFor="Hear_About_Other">        <div><input id="Hear_About_Other" type="radio" name="Hear_About" required={true} className="uk-radio" value="Other" /></div>
        <div className="uk-margin-small-left" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.23.1.1.13.3.div", "Other <small><em>(Please specify in the field below.)</em></small>") }} />
        </label>
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></fieldset>
</div>
<div className="uk-margin">
<div data-ye-form-field="Other_Hear"><div className="uk-form-controls">
        <input className="uk-input uk-form-width-large" id="Other_Hear" type="text" name="Other_Hear" placeholder="Other Reason" aria-label="Other Reason" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
</div>
<h1 className="uk-h5 uk-heading-line uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.27.h1", "<span class=\"uk-text-background\">    \n        \n                    Contact Details        \n        \n        </span>") }} />
<div className="uk-margin">
        <div className="uk-flex-middle uk-grid-small uk-child-width-1-2@m" uk-grid="">    
                <div className="el-item">
<div data-ye-form-field="Phone"><div className="uk-form-controls">
        <input className="uk-input" id="Phone" type="tel" name="Phone" required={true} placeholder="Phone*" aria-label="Phone" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
                <div className="el-item">
<div data-ye-form-field="Email"><div className="uk-form-controls">
        <input className="uk-input" id="Email" type="email" name="Email" required={true} placeholder="Email*" aria-label="Email" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
        </div>
</div>
<div className="uk-margin">
        <div className="uk-flex-middle uk-grid-small uk-child-width-1-1@m" uk-grid="">    
                <div className="el-item">
<div data-ye-form-field="Address1"><div className="uk-form-controls">
        <input className="uk-input" id="Address1" type="text" name="Address1" required={true} placeholder="Street Address*" aria-label="Street Address" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
                <div className="el-item">
<div data-ye-form-field="address2"><div className="uk-form-controls">
        <input className="uk-input" id="address2" type="text" name="address2" placeholder="Address Line 2" aria-label="Address Line 2" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
        </div>
</div>
<div className="uk-margin">
        <div className="uk-flex-middle uk-grid-small uk-child-width-1-2@m" uk-grid="">    
                <div className="el-item">
<div data-ye-form-field="City"><div className="uk-form-controls">
        <input className="uk-input" id="City" type="text" name="City" required={true} placeholder="City*" aria-label="City" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
                <div className="el-item">
<div data-ye-form-field="State"><div className="uk-form-controls">
        <input className="uk-input" id="State" type="text" name="State" required={true} placeholder="State*" aria-label="State" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
                <div className="el-item">
<div data-ye-form-field="Zip"><div className="uk-form-controls">
        <input className="uk-input" id="Zip" type="text" name="Zip" required={true} placeholder="ZIP Code*" aria-label="ZIP Code" />
</div><div className="uk-text-danger uk-text-small" data-ye-form-field-errors=""></div></div>
                </div>
        </div>
</div>
<input type="hidden" id="Date" name="Date" value="August 18, 2026" />
<div id="page#0">
<button type="submit" disabled={true} className="el-content uk-inline uk-width-1-1 uk-button uk-button-danger uk-button-large" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.37.1.button", "<span class=\"ye-form--btn-content\">\n\n    \n        Submit\n    \n</span>\n\n<span uk-spinner=\"ratio: 0.5\" class=\"ye-form--btn-spinner uk-hidden uk-position-center\"></span>") }} />
</div>
        </div>    
</div>
</div>
<input type="hidden" name="formid" value="ec08ee2a-da04a06f" />
<input type="hidden" name="" value="1" data-ye-form-csrf-token="" />
<div data-ye-form-errors=""></div></form>
</div>
</div>
                                </div>                
</div>
  </>
));

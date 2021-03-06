import React from 'react'

export default function Contact() {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-lg-offset-2">
                    <form id="contact-form" method="post" action="" role="form">
                        <div class="messages"></div>
                        <div class="controls">
                            <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_name">Nom <span className="text-danger">*</span></label>
                                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your name *" required="required" data-error="Firstname is required." />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_lastname">Prenom <span className="text-danger">*</span></label>
                                            <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your postnom *" required="required" data-error="Lastname is required."/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="form_email">Email <span className="text-danger">*</span></label>
                                        <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="form_phone">Phone <span className="text-danger">*</span></label>
                                        <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone"/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="form_message">Message <span className="text-danger">*</span></label>
                                            <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required data-error="Please,leave us a message."></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 py-2 mb-1">
                                        <input type="submit" class="newUserButton" value="Contactez-nous"/>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

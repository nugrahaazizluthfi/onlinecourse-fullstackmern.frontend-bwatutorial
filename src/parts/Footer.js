import React from 'react';
import Button from 'elements/Button';
import IconText from 'parts/IconText';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <div className="brand-tagline">
              We kaboom your beauty holiday instanly and memorable.
            </div>
          </div>
          <div className="col-2 mr-5">
            <div className="mt-2">For Beginner</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Start Booking Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <div className="mt-2">Explore Us</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Our Career
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Term & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="mt-2">Connect Us</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622203883991">
                  +622203883991
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakara</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2009 &copy; All rights reserved &copy; Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}

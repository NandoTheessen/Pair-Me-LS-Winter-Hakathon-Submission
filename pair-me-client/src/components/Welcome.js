import React from 'react'
import { withRouter } from 'react-router-dom'
<<<<<<< HEAD
import Login from './Login'



import Register from './Register'
=======
>>>>>>> 248ff972536c2f6e6d69f8bd42a25cfaa7a42ecf

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginRender: false
    }
  }

  render() {
    return (
      <div className="welcome-container">
        <div className="welcome-banner">
          <h1>PairMe</h1>
          <h2>Get help when you need it, give help when you can.</h2>
          {/* Full-width banner image with logo
    Nav stays sticky on top with sign-up button */}
        </div>

        <div className="welcome-body">
          <div className="welcome-left">
            <div className="welcome-header">
              <h3>Welcome to PairMe! </h3>
              <h4>
                We're building a better way for students to find
                pair-programming partners.
              </h4>
            </div>
            <div className="welcome-content">
              <p>
                As developers, we understand that feeling lost or needing
                guidance is an integral part of the development process.
                Sometimes you need to leverage other people’s eyes, ears, and
                brains to get you out of a coding funk. But it’s not always easy
                to find the help you need, when you need it.
              </p>
              <p>
                Our mission is to provide a visual dashboard that allows
                students to request and offer help on challenges that arise in
                the curriculum, as well as seek guidance on individual projects.
                Through the usage of signaling “beacons”, we can automatically
                pair those seeking guidance with those offering assistance. The
                process is simple:
              </p>
              [IMAGE OF DASHBOARD]
              <p>
                Say you’re being introduced to React for the first time. You’ve
                watched the lecture video, tried some online resources, and put
                the StackOverflow servers under extreme load trying to
                understand lifecycle methods. It feels like you’re slowly going
                crazy, stuck in isolation, and just want someone to talk this
                through with you.
              </p>
              <p>
                Another student finished learning React a few weeks ago, and
                loves to bring other fledgling developers into the light of
                component-based architecture. They light a beacon offering help
                with React and other JavaScript topics.
              </p>
              [IMAGES OF BEACON LIGHTING]
              <p>
                Once you light your beacon asking for help through the JSX
                jungle, a Slack notification informs you of a Zoom meeting
                that’s been set up automatically where you can talk to the other
                student about all things React.
              </p>
              [IMAGE OF SLACK NOTIFICATION]
              <p>
                And get this: your meeting will be listed on the PairMe
                dashboard in case other students want to join in on the
                discussion (unless you signal for a private meeting, of course
                ;) ).
              </p>
              [IMAGE OF ACTIVE MEETINGS]
              <p>
                We automate the process of finding face-to-face code instruction
                so that your calls for help don’t get lost in the Slack
                stampede. And as for helpers, no good deed goes unrewarded!
                We’ll keep track of how many debug dragons you’ve slain, so you
                can show off to all the other devs your skills in collaborative
                problem solving.
              </p>
              <p>
                PairMe also reduces redundancy, by letting students know when a
                meeting on a topic is active, so they can jump right in without
                having to look for the link, or start another conference.
              </p>
              <p>
                Coding is fun. It’s challenging. Sometimes, it’s really hard,
                but it’s always a little easier when we work together.
              </p>
              <p>
                PairMe puts programmers together, because more importantly than
                learning to code, are the friends we make along the way.
              </p>
            </div>
          </div>

          <div className="welcome-right">
            {/* Renders the login or registration form depending on user selection */}
            <div className="slack-login">
              <a
                rel="noopeneder noreferrer"
                // eslint-disable-next-line
                href="https://slack.com/oauth/authorize?client_id=154966377728.516246535895&scope=identity.basic"
              >
                <img
                  className="slack-button"
                  src="https://api.slack.com/img/sign_in_with_slack.png"
                  alt="slack logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Welcome)

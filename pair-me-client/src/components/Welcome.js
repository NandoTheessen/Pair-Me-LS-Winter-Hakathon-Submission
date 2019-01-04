import React from 'react'
import { withRouter } from 'react-router-dom'
import robot from '../robot.png'
import slackbot from '../slackbot.png'
import slackMessage from '../slackMessage.png'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginRender: false
    }
  }

  render() {
    // if there is a user logged in, push to the dashboard
    if(localStorage.getItem('username')){
      this.props.history.push('/dashboard')
    }
    return (
      <div className="welcome-container">
        <div className="welcome-banner">
          <h1 className="title">PairMe</h1>
          <h2 style={{ fontWeight: 700 }}>
            Get help when you need it, give help when you can.
          </h2>
          {/* Full-width banner image with logo
    Nav stays sticky on top with sign-up button */}
        </div>

        <div className="welcome-body">
          <div className="welcome-left">
            <div className="welcome-header">
              <h3>Welcome to PairMe! </h3>

              <h4>
                We're building a better way for students to find and receive
                help.
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
                component-based architecture. They start a DM with the PairMe
                Slackbot - `assist React` - and are put into a queue awaiting
                those in need of help.
              </p>
              <p>
                Once you DM the PairMe bot with `help React`, the bot will
                recognize that there are two people that can be matched for a
                topic and informs you and the person who volunteered to help you
                that a match has been made. This
                takes a lot of the guesswork out of trouble-shooting inquiries
                and we hope it will encourage new programmers to reach out for help when they
                need it.
              </p>
              <div className="message-wrapper">
                <img
                  className="slackMessage"
                  src={slackMessage}
                  alt="Slack message"
                />
              </div>
              <p>
                We automate the process of finding face-to-face code instruction
                so that your calls for help don’t get lost in the Slack
                stampede. And as for helpers, no good deed goes unrewarded!
                We’ll keep track of how many debug dragons you’ve slain, so you
                can show off to all the other devs your skills in collaborative
                problem solving.
              </p>
              <p>
                Coding is fun. It’s challenging. Sometimes, it’s really hard,
                but it’s always a little easier when we work together.
              </p>
              <p>
                PairMe puts programmers together, because more important than
                learning to code, are the friends we make along the way.
              </p>
            </div>
          </div>
          <div className="welcome-right">
            {/* Renders the login or registration form depending on user selection */}
            <img className="robot" src={robot} alt="Robot" />;
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
            <br />
            <br />
            <img className="slackbot" src={slackbot} alt="Slackbot" />
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Welcome);


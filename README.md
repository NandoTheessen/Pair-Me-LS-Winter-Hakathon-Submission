# Pair-Me-FrontEnd

This is the front-end! Adam and I will be working on this section!

**Problem**
PMs don't have an easy way to monitor which students need help without sifting through Slack comments. 

Students don't have a straightforward way to match with people to pair-program with on projects.

**Solution**
PairMe provides a visual dashboard that makes it easier for Lambda students to find help, and for PMs/Students to offer help. PairMe can also reduce Zoom redundancy by showing active meetings, and their topics of discussion, so that students looking for help can easily jump on an active Zoom if it's relevant to their problems.

**Features**
- User registration and login using JavaScript web tokens and hashed password storage.
- User profiles with username, avatar, bio/experience, skills, and curriculum progress.
- "Beacons" can be deployed to ask for help (Ask Beacon), or to offer help (Offer Beacon).
- Offer Beacons can be scheduled for a certain time range to ensure matched users are online.
- Offer Beacons can specify what type of help is being offered (e.g. general assistance vs. module/language specific).
- Ask Beacons show student's curriculum (iOS/FSW/DS etc.), cohort (e.g. FSW13), and what module/repository they are working on (e.g. Data Structures).
- When an Ask is matched with an Offer, a Zoom link is auto-generated and then pushed to the "matchees" via Slack API DMs.
- The generated meeting is added to the "active meetings" dashboard, showing who's in the meeting and what the meeting is discussing.

**Technologies**
- Front-end built using React JS
- Back-end using Express/Node and SQLite
- Deployed on Firebase

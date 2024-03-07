import React, { useState, useEffect } from 'react';
import { getEmails } from '../../../api/email';
import { DesktopScreenContainer, DesktopMenu, InboxContainer, Inbox, Email } from './AdminInbox.styles'

const AdminInbox = ({ user, notify }) => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    const retrieveEmails = async () => {
      try {
        const res = await getEmails(user);
        console.log(res)
        setEmails(res.data.emails);
      } catch(e) {
        console.log(e)
      }
    }

    retrieveEmails()
  }, [])

  return (
    <DesktopScreenContainer>
      <DesktopMenu>
        <button>Compose</button>
        <div>
          <button>inbox</button>
          <button>templates</button>
          <button>important</button>
        </div>


      </DesktopMenu>
      <InboxContainer>
        <h1>Inbox</h1>
        <Inbox>
          {emails.map((email) => {

            const turnUnixToTimeORDate = (unixTime) => {
                const timestamp = unixTime;
                const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

                // Extract hour and minute
                const hours = date.getHours();
                const minutes = date.getMinutes();

                // Format hours to 12-hour format
                const formattedHours = hours % 12 || 12; // Ensure 12-hour format and handle 0 hours
                const ampm = hours >= 12 ? 'pm' : 'am';

                // Construct the final time string
                let timeString = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;
                console.log(timeString)
                return timeString
            }

            let time = turnUnixToTimeORDate(email.date)

          return(
            <Email key={email.id} isRead={email.unread}>
              <div>
                <p>star</p>
                <div>
                  <p>{email.from[0].name}</p>
                  <p>{email.subject}</p>
                </div>
              </div>
              <p>{time}</p>
            </Email>
            )
          })} 
        </Inbox>
      </InboxContainer>
    </DesktopScreenContainer>
  )
}

export default AdminInbox
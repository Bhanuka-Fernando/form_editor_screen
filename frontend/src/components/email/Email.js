import React from "react"

const Email = ({emailData}) => {
    return(
        <div className="email-container">
            <h1>Enter your email here</h1>
            <p><strong>Email:</strong> {emailData.email || "No email provided"}</p>
        </div>
    )
}

export default Email;                                  
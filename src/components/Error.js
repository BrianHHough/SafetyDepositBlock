import { Alert, AlertTitle } from "@mui/material"

export const ErrorBox = ({title, message}) => {
    return (
        <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    )
}

export const FileUploadNotification = () => {
  return (
      <Alert severity="error">
        <AlertTitle>You Need a paid plan</AlertTitle>
        <p>Upgrade here: <a href="/signupform">Join the Waitlist</a></p>
      </Alert>
  )
}
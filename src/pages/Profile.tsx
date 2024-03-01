import { useAuth } from "../hooks/useAuth"

export const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      <p>This is the profile page</p>
      <p>User ID: {user?.userID}</p>
      <p>Role: {user?.role}</p>
    </div>
  )
}
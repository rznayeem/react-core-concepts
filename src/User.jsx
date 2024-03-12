export default function User({ user }) {
  const { name, email } = user;
  console.log(user);
  console.log(user.name);
  return (
    <div
      style={{
        background: 'gray',
        padding: '20px',
        margin: '15px',
        borderRadius: '16px',
      }}
    >
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
    </div>
  );
}

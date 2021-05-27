function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Arpan",
  lastName: "Mukhopadhyay"
}

function Introductor() {
  return (
    <>
      <p>
        Hello {formatName(user)} !!
      </p>
    </>
  );
}

export default Introductor;
import { authUser, authUserDetail } from '../../../lib/register';

const UsersPage = async () => {

  const data = await authUser();
  const detail = await authUserDetail();
  const makeObject = JSON.parse(detail.value);
  console.log(makeObject.data.firstname);
  return (
    <div>
      <h1> {data.value} </h1>
      <p>
        <span className="text-white font-extrabold font-mono">Firstname: </span> {makeObject.data.firstname}
      </p>
      <p>
        <span className="text-white font-extrabold font-mono">Lastname: </span> {makeObject.data.lastname}
      </p>
      <p>
        <span className="text-white font-extrabold font-mono">Username: </span> {makeObject.data.username}
      </p>
      <p>
        <span className="text-white font-extrabold font-mono">email: </span> {makeObject.data.email}
      </p>
      <p>
        <span className="text-white font-extrabold font-mono">mobile: </span> {makeObject.data.mobile}
      </p>
      <p>
        <span className="text-white font-extrabold font-mono">uuid: </span> {makeObject.data.uuid}
      </p>
      <p>
        <span className="text-white font-extrabold font-mono">id: </span> {makeObject.data.id}
      </p>
    </div>
  )
}

export default UsersPage

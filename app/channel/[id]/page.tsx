export default function Page(props) {
  console.log(props);
  return <div>channel:{props.params.id}</div>;
}

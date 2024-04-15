export default function Page(props) {
  console.log(props);
  return <div>playlist {props.searchParams.list}</div>;
}

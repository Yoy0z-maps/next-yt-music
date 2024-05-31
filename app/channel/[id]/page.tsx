export default function ChannelPage(props: any) {
  console.log(props);
  return <div>channel/{props.params.id}</div>;
}

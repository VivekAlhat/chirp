import CopyToClipboard from "@/components/copy-clipboard";

interface IPageParams {
  params: {
    id: string;
  };
}

export default function Page(props: IPageParams) {
  if (!props.params.id) {
    return <div>This site does not exist</div>;
  }

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-bold">Start collecting feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code below in your website to get started
      </p>
      <div className="bg-gray-800 text-white p-8 rounded-md relative">
        <code className="space-y-1">
          <p>{`<chirp-widget site="${props.params.id}"></chirp-widget>`}</p>
          <p
            suppressHydrationWarning
          >{`<script src="${process.env.WIDGET_URL}"></script>`}</p>
        </code>
        <CopyToClipboard id={props.params.id} />
      </div>
    </div>
  );
}

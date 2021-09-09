import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Share() {
  const [copied, setCopied] = useState(false);
  let url = window.location;

  return (
    <div>
      <br />
      <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
        <button>Copy share link</button>
      </CopyToClipboard>
      <br />
      <br />
      {copied ? <span style={{ color: "black" }}>Copied.</span> : null}
      <br />
      <br />
    </div>
  );
}

export default Share;

import React from "react";
import ContentLoader from "react-content-loader";

const SessionItem = (props) => (
  <ContentLoader viewBox="0 0 500 280" height={280} width={500} {...props}>
    <rect x="3" y="3" rx="10" ry="10" width="433" height="180" />
    <rect x="3" y="190" rx="0" ry="0" width="433" height="20" />
    <rect x="3" y="215" rx="0" ry="0" width="433" height="20" />
    <rect x="3" y="242" rx="0" ry="0" width="433" height="20" />
  </ContentLoader>
);

export default SessionItem;

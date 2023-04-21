import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={430}
    height={411}
    viewBox="0 0 430 411"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="5" y="418" rx="10" ry="10" width="110" height="45" />
    <rect x="137" y="418" rx="20" ry="20" width="140" height="45" />
    <rect x="0" y="0" rx="5" ry="5" width="430" height="293" />
    <rect x="10" y="303" rx="5" ry="5" width="410" height="38" />
    <rect x="10" y="350" rx="5" ry="5" width="410" height="60" />
  </ContentLoader>
);

export default Skeleton;

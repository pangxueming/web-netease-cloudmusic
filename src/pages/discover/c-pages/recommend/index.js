import React, { memo } from "react";

import AXTopBanner from "./c-cpns/top-banner";
import AXHotRecommend from "./c-cpns/hot-recomend";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

function AXRecommend(props) {
  return (
    <RecommendWrapper>
      <AXTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <AXHotRecommend />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(AXRecommend);

// function AXRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return (
//     <div>
//       <h2>AXRecommend:{topBanners.length}</h2>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });
// const mapDisPatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDisPatchToProps)(memo(AXRecommend));

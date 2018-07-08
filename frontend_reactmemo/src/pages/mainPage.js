import React from 'react';
import PageTemplate from 'components/common/PageTemplate'

import LabelWrapper from 'components/Label/LabelBoxWrapper'
import LabelContainer from 'containers/LabelContainer'
import MemoListWrapper from 'components/MemoList/MemoListBoxWrapper'
import MemoListContainer from 'containers/MemoListContainer'
import MemoWrapper from 'components/Memo/MemoBoxWrapper'
import MemoContainer from 'containers/MemoContainer'

const mainPage = () => {
  return (
    <PageTemplate>

      <LabelWrapper>
        <LabelContainer />
      </LabelWrapper>

      <MemoListWrapper>
        <MemoListContainer />
      </MemoListWrapper>

      <MemoWrapper>
        <MemoContainer />
      </MemoWrapper>

    </PageTemplate>
  );
};

export default mainPage;
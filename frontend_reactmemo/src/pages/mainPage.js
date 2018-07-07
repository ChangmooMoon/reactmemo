import React from 'react';
import PageTemplate from 'components/common/PageTemplate'

import LabelWrapper from 'components/Label/LabelBoxWrapper'
import LabelList from 'components/Label/LabelList'
import MemoListWrapper from 'components/MemoList/MemoListBoxWrapper'
import MemoListBox from 'components/MemoList/MemoListBox'
import MemoWrapper from 'components/Memo/MemoBoxWrapper'
import MemoBox from 'components/Memo/MemoBox'

const mainPage = () => {
  return (
    <PageTemplate>

      <LabelWrapper>
        <LabelList />
      </LabelWrapper>

      <MemoListWrapper>
        <MemoListBox />
      </MemoListWrapper>

      <MemoWrapper>
        <MemoBox />
      </MemoWrapper>

    </PageTemplate>
  );
};

export default mainPage;
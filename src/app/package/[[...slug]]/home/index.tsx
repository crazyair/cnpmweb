'use client';
import { Col, Row, Space, Typography } from 'antd';
import style from './home.module.css';
import SizeContainer from '@/components/SizeContianer';
import PresetCard from '@/components/PresetCard';
import AntdStyle from '@/components/AntdStyle';
import ReadmeContent from '@/components/ReadmeContent';
import { ContributorContent } from '@/components/ContributorContent';
import { LinkContent } from '@/components/LinkContnet';

export default function Home({ manifest }: { manifest: any }) {
  const pkg = manifest;
  const tags: string[] = pkg?.keywords || [];

  const contentNode = (
    <Row>
      <Col flex='1 1 0'>
        <PresetCard title='项目文档' style={{ minHeight: '100%' }}>
          <ReadmeContent name={manifest.name} version={manifest.version} />
        </PresetCard>
      </Col>
      <Col flex='0 0 378px'>
        <Space direction={'vertical'} size='middle' style={{ minWidth: 378 }}>
          <PresetCard title='项目成员'>
            <ContributorContent members={manifest.maintainers} />
          </PresetCard>
          <PresetCard title='相关链接'>
            <LinkContent
              git={manifest.repository?.url}
              dist={manifest.versions?.[manifest['dist-tags'].latest].dist}
            />
          </PresetCard>
        </Space>
      </Col>
    </Row>
  );

  return (
    <AntdStyle>
      <div className={style.homeCon}>
        <SizeContainer
          maxWidth={1184}
          style={{ position: 'relative', marginTop: 0 }}
        >
          <div className={style.sloganCon}>
            <Typography.Title>{pkg!.name}</Typography.Title>
            <Typography.Paragraph ellipsis>
              {pkg!.description}
            </Typography.Paragraph>
            <div>
              <ul className={style.tagCon}>
                {tags?.map((tag) => {
                  return (
                    <li key={tag} className={style.tagItem}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {contentNode}
        </SizeContainer>
      </div>
    </AntdStyle>
  );
}

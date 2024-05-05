import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { Navigate, useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const { isLogin } = useModel('login');
  console.log('isLogin', isLogin);

  return (
    <>
      {!isLogin ? (
        <Navigate to="/login" />
      ) : (
        <PageContainer ghost>
          <div className={styles.container}>
            <Guide name={trim(name)} />
          </div>
        </PageContainer>
      )}
    </>
  );
};

export default HomePage;

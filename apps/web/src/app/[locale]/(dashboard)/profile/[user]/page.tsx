import ProfileModule from '@/modules/Profile';

type TParams = {
  user: string;
};

function PageProfile({ params }: { params: TParams }) {
  return <ProfileModule user={params.user} />;
}

export default PageProfile;

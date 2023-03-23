export const onGet: any = async ({ redirect, url }: any) => {
  if (url.pathname === '/resume') {
    throw redirect(301, `https://sab.luminescent.dev/resume`);
  }
  else if (url.pathname.startsWith('/transcript')) {
    throw redirect(301, `https://transcript.luminescent.dev${url.pathname.replace('/transcript', '')}`)
  }
  else {
    throw redirect(301, `https://luminescent.dev${url.pathname}`)
  }
};
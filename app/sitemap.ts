import type {MetadataRoute} from 'next';
export default function sitemap():MetadataRoute.Sitemap{return ['','/ai-agent-dlya-prodazhiv','/tarify','/mozhlyvosti','/integratsii','/demo','/kontakty'].map(path=>({url:`https://ministrysale.org${path}`,changeFrequency:'monthly',priority:path?0.7:1}))}

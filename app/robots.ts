import type {MetadataRoute} from 'next';
export default function robots():MetadataRoute.Robots{return {rules:process.env.SITE_LIVE==='true'?{userAgent:'*',allow:'/',disallow:['/api/','/start','/dyakuyemo','/oplata-uspishna']}:{userAgent:'*',disallow:'/'},sitemap:'https://ministrysale.org/sitemap.xml'}}

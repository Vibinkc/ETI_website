/**
 * The "Share Us" row of social links.
 *
 * The same five links sit on every news and listing page; only the shared
 * URL changes, and that is just the page's own route. Keeping one copy means
 * adding a network -- or fixing a share URL -- happens in one place.
 *
 * The markup is the original UIkit output, unchanged.
 */
export default function ShareLinks({ route }: { route: string }) {
  const u = encodeURIComponent(`https://etiedu.org${route}`);
  return (
    <ul className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle" {...{ "uk-grid": "" }}>
                <li className="el-item">
    <a className="el-link uk-icon-link" href={`https://www.facebook.com/sharer/sharer.php?u=${u}`} title="Tap here to share this page to Facebook." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to Facebook."><span {...{ "uk-icon": "icon: facebook;" }}></span></a></li>
                <li className="el-item">
    <a className="el-link uk-icon-link" href={`https://x.com/intent/post?url=${u}&text=`} title="Tap here to share this page to X." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to X."><span {...{ "uk-icon": "icon: x;" }}></span></a></li>
                <li className="el-item">
    <a className="el-link uk-icon-link" href={`https://bsky.app/intent/compose?text=Tap+here+to+share+this+page+to+Bluesky.%0A${u}`} rel="noreferrer" target="_blank" aria-label="Bluesky"><span {...{ "uk-icon": "icon: bluesky;" }}></span></a></li>
                <li className="el-item">
    <a className="el-link uk-icon-link" href={`https://mastodon.social/share?url=${u}&text=`} title="Tap here to share this page to Mastodon." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to Mastodon."><span {...{ "uk-icon": "icon: mastodon;" }}></span></a></li>
                <li className="el-item">
    <a className="el-link uk-icon-link" href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} title="Tap here to share this page to LinkedIn." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to LinkedIn."><span {...{ "uk-icon": "icon: linkedin;" }}></span></a></li>
        
        </ul>
  );
}

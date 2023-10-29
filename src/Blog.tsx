import './Blog.css'
import Header from './components/Header.tsx'
import Paragraph from "./components/Paragraph.tsx";
import Picture from "./components/Picture.tsx";
import List from "./components/List.tsx";
import Link from "./components/Link.tsx";
import Blockquote from "./components/Blockquote.tsx";
import Text from "./components/Text.tsx";
import Profile from "./Profile.tsx";
function Blog(){
    return (
        <>
            <Header />
            <Paragraph />
            <Picture />
            <List />
            <Link />
            <Blockquote />
            <Text />
            <Profile />
        </>
    );
}

export default Blog
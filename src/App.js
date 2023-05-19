import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Blog from "./pages/blog/Blog";
import Team from "./pages/team/Team";
import Services from "./pages/services/Services";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes , Navigate, HashRouter } from "react-router-dom";
import BlogId from "./pages/blog/BlogId";
import BlogEdit from "./pages/blog/BlogEdit";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/layout/AdminLayout";
import Users from "./pages/admin/users/Users";
import Content from "./pages/admin/content/Content";


function App() {
  return (
    <>
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/serv" element={<Navigate  to="/services" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogId />} />
          <Route path="/blog/:id/edit" element={<BlogEdit />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </Layout> */}
    </Router>
    <HashRouter hashType="hashbang" basename="/admin">
      {/* <Layout> */}
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/content" element={<Content />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </Layout> */}
    </HashRouter>
    
    </>
    

  );
}

export default App;

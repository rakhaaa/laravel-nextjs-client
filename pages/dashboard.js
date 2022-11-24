//layout
import Layout from "../layouts/custom";

//import hook react
import { useState, useEffect } from "react";

//import Link
import Link from "next/link";

//import Head
import Head from "next/head";

//import axios
import axios from "axios";

function Dashboard() {
  // state posts
  const [posts, setPosts] = useState([]);

  const getServerSideProps = async () => {
    try {
      const req = await axios.get(
        `${process.enve.NEXT_PUBLIC_API_BACKEND}/api/posts`
      );
      const res = await req.data.data;
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 shadow-sm rounded-3">
              <div className="card-body">
                <Link href="/posts/create">
                  <button className="btn btn-primary border-0 shadow-sm mb-3">
                    TAMBAH
                  </button>
                </Link>
                <table className="table table-bordered mb-0">
                  <thead>
                    <tr>
                      <th scope="col">IMAGE</th>
                      <th scope="col">JUDUL</th>
                      <th scope="col">CONTENT</th>
                      <th scope="col">AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.id}>
                        <td className="text-center">
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/posts/${post.image}`}
                            width="150"
                            className="rounded-3"
                          />
                        </td>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">
                            EDIT
                          </button>
                          <button className="btn btn-sm btn-danger border-0 shadow-sm mb-3">
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;

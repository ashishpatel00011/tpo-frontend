import React, { useState, useEffect } from 'react';
import { getdp_graph } from '../../api/get_dsa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./all.css";

const DpGraph = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [problems, setProblems] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function fetchProblems() {
      const data = await getdp_graph(token);
      setProblems(data);
    }

    fetchProblems();
  }, [token]);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className={`dropbtn ${isOpen ? 'active' : ''}`}>
        Importent Graph & Dynamic Programming
        <i className={`fas fa-chevron-down ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td className="problem"><strong>Problem</strong></td>
                  <td><strong>Leetcode</strong></td>
                  <td><strong>YouTube</strong></td>
                  <td className="difficulty"><strong>Difficulty</strong></td>
                </tr>
              </thead>
              <tbody>
                {problems.length > 0 ? (
                  problems.map((problem) => (
                    <tr key={problem.id}>
                      <td><input type="checkbox" id={`blind_ques_${problem.id}`} /></td>
                      <td>{problem.name}</td>
                      <td>
                        <a
                          href={problem.leetcode_link}
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Link"
                          className="text-blue-500 hover:underline"
                        >
                          <img src="/logo.png" alt="LeetCode Logo" width="20" height="20" />
                        </a>
                      </td>
                      <td>
                        {problem.youtube_link ? (
                          <a
                            href={problem.youtube_link}
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Link"
                            className="text-red-600 hover:underline"
                          >
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                          </a>
                        ) : "NA"}
                      </td>
                      <td className={`difficulty ${problem.difficulty}`}>
                        {problem.difficulty}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No problems found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default DpGraph;

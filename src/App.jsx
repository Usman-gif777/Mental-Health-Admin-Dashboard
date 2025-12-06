import React, { useState, useEffect } from 'react';
import './App.css';

// Emoji icons
const BarChart3 = () => <span>📊</span>;
const Users = () => <span>👥</span>;
const FileText = () => <span>📄</span>;
const Activity = () => <span>📈</span>;
const Settings = () => <span>⚙️</span>;
const Bell = () => <span>🔔</span>;
const SearchIcon = () => <span>🔍</span>;
const FilterIcon = () => <span>🔧</span>;
const Download = () => <span>📥</span>;
const Edit = () => <span>✏️</span>;
const Trash2 = () => <span>🗑️</span>;
const Plus = () => <span>➕</span>;
const AlertTriangle = () => <span>⚠️</span>;
const Shield = () => <span>🛡️</span>;
const Clock = () => <span>⏰</span>;
const TrendingUp = () => <span>📈</span>;
const Brain = () => <span>🧠</span>;
const ChevronRight = () => <span>▶️</span>;
const LogOut = () => <span>🚪</span>;
const Upload = () => <span>📤</span>;
const User = () => <span>👤</span>;
const Eye = () => <span>👁️</span>;
const Save = () => <span>💾</span>;
const Cancel = () => <span>❌</span>;
const Check = () => <span>✅</span>;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [userProfile, setUserProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Data states
  const [testCategories, setTestCategories] = useState([
    {
      id: 1,
      name: "General Mental Health Screening",
      description: "Broad overview of emotional wellbeing",
      created_at: "2024-01-15",
      computation_logic: "40% voice + 30% sentiment + 30% stress"
    },
    {
      id: 2,
      name: "Depression Assessment (PHQ-9 Style)",
      description: "Detect depressive symptoms",
      created_at: "2024-01-15",
      computation_logic: "60% PHQ-9 model + 40% emotion sadness"
    },
    {
      id: 3,
      name: "Anxiety Assessment (GAD-7 Style)",
      description: "Identify generalized anxiety symptoms",
      created_at: "2024-01-15",
      computation_logic: "50% GAD-7 model + 30% voice stress + 20% sentiment fear"
    }
  ]);
  
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "How would you describe your overall mood over the past week?",
      test_id: 1,
      test_name: "General Screening",
      created_at: "2024-01-15"
    },
    {
      id: 2,
      text: "Have you experienced feelings of sadness or hopelessness?",
      test_id: 2,
      test_name: "Depression Assessment",
      created_at: "2024-01-15"
    },
    {
      id: 3,
      text: "How often have you felt nervous, anxious, or on edge?",
      test_id: 3,
      test_name: "Anxiety Assessment",
      created_at: "2024-01-15"
    }
  ]);
  
  const [reports, setReports] = useState([
    { 
      id: 1, 
      user_id: 101, 
      test_id: 2, 
      depression_score: 15, 
      anxiety_score: 8, 
      stress_score: 12, 
      overall_state: "Moderate Depression", 
      recommendations: "CBT worksheets, Regular follow-up", 
      created_at: "2024-03-20", 
      test_name: "Depression Assessment" 
    },
    { 
      id: 2, 
      user_id: 102, 
      test_id: 3, 
      depression_score: 5, 
      anxiety_score: 18, 
      stress_score: 15, 
      overall_state: "Severe Anxiety", 
      recommendations: "Professional consultation recommended", 
      created_at: "2024-03-19", 
      test_name: "Anxiety Assessment" 
    },
    { 
      id: 3, 
      user_id: 103, 
      test_id: 1, 
      depression_score: 8, 
      anxiety_score: 12, 
      stress_score: 10, 
      overall_state: "Moderate Stress", 
      recommendations: "Mindfulness exercises, Sleep hygiene", 
      created_at: "2024-03-18", 
      test_name: "General Screening" 
    }
  ]);

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      // Mock authentication check
      setTimeout(() => {
        setUserProfile({
          id: 1,
          name: 'Admin User',
          email: 'admin@neurocare.com',
          role: 'Administrator'
        });
        setIsAuthenticated(true);
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, []);

  // Login Form Component
  const LoginForm = () => {
    const [email, setEmail] = useState('admin@neurocare.com');
    const [password, setPassword] = useState('password123');
    const [error, setError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      setIsLoggingIn(true);

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (email === 'admin@neurocare.com' && password === 'password123') {
          localStorage.setItem('adminToken', 'mock-jwt-token-12345');
          setUserProfile({
            id: 1,
            name: 'Admin User',
            email: email,
            role: 'Administrator'
          });
          setIsAuthenticated(true);
        } else {
          throw new Error('Invalid credentials. Use admin@neurocare.com / password123');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoggingIn(false);
      }
    };

    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span style={{ fontSize: '40px' }}>🧠</span>
              <h1 className="login-title">NeuroCare Admin</h1>
            </div>
            <p className="login-subtitle">Mental Health System Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            {error && (
              <div className="error-alert">
                ⚠️ {error}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="admin@neurocare.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Logging in...' : 'Login to Dashboard'}
            </button>

            <div className="login-note">
              <p style={{marginBottom: '8px', fontWeight: '600'}}>Demo Credentials:</p>
              <p><strong>Email:</strong> admin@neurocare.com</p>
              <p><strong>Password:</strong> password123</p>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Dashboard Header
  const DashboardHeader = () => (
    <header className="header">
      <div className="header-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div className="logo">
            <span style={{ fontSize: '24px' }}>🧠</span>
            <div>
              <h1 className="logo-title">NeuroCare Admin</h1>
              <p className="logo-subtitle">Mental Health Monitoring System</p>
            </div>
          </div>
          
          <div className="search-bar">
            <span className="search-icon"><SearchIcon /></span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              placeholder="Search assessments, users, reports..."
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button className="icon-button" style={{ position: 'relative' }}>
            <Bell />
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              backgroundColor: '#ff5252',
              color: 'white',
              fontSize: '10px',
              fontWeight: '600',
              padding: '2px 6px',
              borderRadius: '10px',
              minWidth: '16px'
            }}>3</span>
          </button>
          
          <div className="user-cell" style={{ padding: '8px 12px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <div className="user-avatar-small">
              <User />
            </div>
            <div>
              <div className="user-name-small">{userProfile?.name || 'Admin User'}</div>
              <div className="user-id">{userProfile?.role || 'Administrator'}</div>
            </div>
          </div>
          
          <button 
            onClick={() => {
              localStorage.removeItem('adminToken');
              setIsAuthenticated(false);
              setUserProfile(null);
            }}
            className="secondary-button"
          >
            <LogOut /> Logout
          </button>
        </div>
      </div>
    </header>
  );

  // Sidebar Component
  const Sidebar = () => {
    const tabs = [
      { id: 'overview', label: 'Dashboard Overview', icon: BarChart3 },
      { id: 'tests', label: 'Test Categories', icon: FileText },
      { id: 'questions', label: 'Assessment Questions', icon: FileText },
      { id: 'reports', label: 'User Reports', icon: Activity },
      { id: 'users', label: 'User Management', icon: Users },
      { id: 'settings', label: 'System Settings', icon: Settings },
    ];

    return (
      <aside className="sidebar">
        <nav className="sidebar-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`sidebar-tab ${isActive ? 'active' : ''}`}
              >
                <span style={{ fontSize: '18px', width: '24px' }}><Icon /></span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="system-status">
            <div className="status-indicator">
              <div className="status-dot" style={{ animation: 'pulse 2s infinite' }}></div>
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#00a86b' }}>System Online</span>
            </div>
            <p style={{ fontSize: '11px', color: '#666', marginTop: '4px', marginLeft: '16px' }}>All systems operational</p>
          </div>
        </div>
      </aside>
    );
  };

  // Stat Card Component
  const StatCard = ({ title, value, icon: Icon, trend, color = 'blue' }) => {
  const colorMap = {
    blue: { 
      bg: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)', 
      text: '#4f46e5',
      gradient: 'linear-gradient(135deg, #4f46e5, #6366f1)'
    },
    green: { 
      bg: 'linear-gradient(135deg, #d1fae5, #a7f3d0)', 
      text: '#059669',
      gradient: 'linear-gradient(135deg, #059669, #10b981)'
    },
    red: { 
      bg: 'linear-gradient(135deg, #fee2e2, #fecaca)', 
      text: '#dc2626',
      gradient: 'linear-gradient(135deg, #dc2626, #ef4444)'
    },
    purple: { 
      bg: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)', 
      text: '#7c3aed',
      gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)'
    },
  };
  
  return (
    <div className="card stat-card">
      <div className="stat-header">
        <div className="stat-icon" style={{ 
          background: colorMap[color].bg,
          color: colorMap[color].text
        }}>
          <span style={{ fontSize: '24px' }}><Icon /></span>
        </div>
        {trend !== undefined && (
          <span className="trend-badge" style={{
            background: trend > 0 ? 'linear-gradient(135deg, #d1fae5, #a7f3d0)' : 'linear-gradient(135deg, #fee2e2, #fecaca)',
            color: trend > 0 ? '#065f46' : '#991b1b'
          }}>
            {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <h3 className="stat-value" style={{ 
        background: colorMap[color].gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        {value}
      </h3>
      <p className="stat-title">{title}</p>
    </div>
  );
};
  // Risk Badge Component
  const RiskBadge = ({ level }) => {
    const getBadgeClass = () => {
      switch(level) {
        case 'high': return 'badge-high';
        case 'moderate': return 'badge-moderate';
        default: return 'badge-low';
      }
    };

    const getText = () => {
      switch(level) {
        case 'high': return 'High Risk';
        case 'moderate': return 'Moderate';
        default: return 'Low Risk';
      }
    };

    return (
      <span className={`badge ${getBadgeClass()}`}>
        {getText()}
      </span>
    );
  };

  // Main Content Router
  const DashboardContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'tests':
        return <TestCategories />;
      case 'questions':
        return <QuestionsManagement />;
      case 'reports':
        return <ReportsManagement />;
      case 'users':
        return <UserManagement />;
      case 'settings':
        return <SystemSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  // Dashboard Overview Component
  const DashboardOverview = () => (
    <div className="content">
      <div className="welcome-banner">
        <div>
          <h2 className="welcome-title">Welcome back, {userProfile?.name?.split(' ')[0] || 'Admin'}!</h2>
          <p className="welcome-text">
            Here's what's happening with your mental health assessments today.
          </p>
          <div className="welcome-status">
            <div className="status-item">
              <div className="status-dot-online"></div>
              <span>System: Operational</span>
            </div>
            <div className="status-item">
              <span style={{ fontSize: '18px' }}><Clock /></span>
              <span>Last updated: Just now</span>
            </div>
          </div>
        </div>
        <div className="welcome-icon">
          <span style={{ fontSize: '60px' }}>🧠</span>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard title="Total Users" value="1,254" icon={Users} trend={12} color="blue" />
        <StatCard title="Completed Assessments" value="5,432" icon={FileText} trend={8} color="green" />
        <StatCard title="High Risk Cases" value="42" icon={AlertTriangle} trend={-3} color="red" />
        <StatCard title="Avg Response Time" value="2.3s" icon={TrendingUp} color="purple" />
      </div>

      <div className="content-grid">
        <div className="card" style={{ flex: 2 }}>
          <div className="card-header">
            <h3 className="card-title">Recent High-Risk Assessments</h3>
            <button 
              className="small-button"
              onClick={() => setActiveTab('reports')}
            >
              View All →
            </button>
          </div>
          <RecentReportsTable />
        </div>
        
        <div className="card" style={{ flex: 1 }}>
          <div className="card-header">
            <h3 className="card-title">Quick Actions</h3>
          </div>
          <QuickActions />
        </div>
      </div>
    </div>
  );

  // Recent Reports Table Component
  const RecentReportsTable = () => (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">User</th>
            <th className="table-header">Assessment</th>
            <th className="table-header">Risk</th>
            <th className="table-header">Date</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.slice(0, 5).map((report) => (
            <tr key={report.id} className="table-row">
              <td className="table-cell">
                <div className="user-cell">
                  <div className="user-avatar-small">
                    <User />
                  </div>
                  <div>
                    <div className="user-name-small">User #{report.user_id}</div>
                    <div className="user-id">ID: {report.user_id}</div>
                  </div>
                </div>
              </td>
              <td className="table-cell">{report.test_name}</td>
              <td className="table-cell">
                <RiskBadge level={
                  report.overall_state?.toLowerCase().includes('severe') ? 'high' :
                  report.overall_state?.toLowerCase().includes('moderate') ? 'moderate' : 'low'
                } />
              </td>
              <td className="table-cell">
                {new Date(report.created_at).toLocaleDateString()}
              </td>
              <td className="table-cell">
                <div className="action-buttons">
                  <button 
                    className="icon-button"
                    onClick={() => alert(`Viewing report #${report.id}`)}
                  >
                    <Eye /> View
                  </button>
                  <button 
                    className="icon-button"
                    style={{ color: '#ff5252', borderColor: '#ffd6d6' }}
                    onClick={() => alert(`Flagging report #${report.id}`)}
                  >
                    <AlertTriangle /> Flag
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Quick Actions Component
  const QuickActions = () => (
    <div className="quick-actions">
      <button 
        onClick={() => setActiveTab('questions')}
        className="quick-action-button"
      >
        <span style={{ fontSize: '20px' }}><Plus /></span>
        <div>
          <div className="quick-action-title">Add Questions</div>
          <div className="quick-action-desc">Create new assessment questions</div>
        </div>
        <span style={{ fontSize: '20px' }}>→</span>
      </button>
      
      <button 
        onClick={() => {
          alert('Exporting reports... This would download CSV in real implementation.');
        }}
        className="quick-action-button"
      >
        <span style={{ fontSize: '20px' }}><Download /></span>
        <div>
          <div className="quick-action-title">Export Reports</div>
          <div className="quick-action-desc">Download all user data</div>
        </div>
        <span style={{ fontSize: '20px' }}>→</span>
      </button>
      
      <button 
        onClick={() => {
          alert('Opening analytics dashboard...');
        }}
        className="quick-action-button"
      >
        <span style={{ fontSize: '20px' }}><BarChart3 /></span>
        <div>
          <div className="quick-action-title">View Analytics</div>
          <div className="quick-action-desc">Detailed insights & charts</div>
        </div>
        <span style={{ fontSize: '20px' }}>→</span>
      </button>
    </div>
  );

  // Test Categories Component
  const TestCategories = () => {
    const [isAddingTest, setIsAddingTest] = useState(false);
    const [newTest, setNewTest] = useState({
      name: '',
      description: '',
      computation_logic: ''
    });
    const [editingTest, setEditingTest] = useState(null);

    const handleAddTest = () => {
      const test = {
        id: testCategories.length + 1,
        ...newTest,
        created_at: new Date().toISOString().split('T')[0]
      };
      
      setTestCategories([...testCategories, test]);
      setIsAddingTest(false);
      setNewTest({ name: '', description: '', computation_logic: '' });
      alert('Test category added successfully!');
    };

    const handleDeleteTest = (id) => {
      if (window.confirm('Are you sure you want to delete this test category?')) {
        setTestCategories(testCategories.filter(test => test.id !== id));
        alert('Test category deleted!');
      }
    };

    const handleSaveEdit = () => {
      setTestCategories(testCategories.map(test => 
        test.id === editingTest.id ? editingTest : test
      ));
      setEditingTest(null);
      alert('Test category updated!');
    };

    return (
      <div className="content">
        <div className="page-header">
          <div>
            <h2 className="page-title">Test Categories</h2>
            <p className="page-subtitle">Manage different types of mental health assessments</p>
          </div>
          <button 
            onClick={() => setIsAddingTest(true)}
            className="primary-button"
          >
            <Plus /> Add New Test
          </button>
        </div>

        {isAddingTest && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3 style={{ margin: 0 }}>Add New Test Category</h3>
                <button 
                  onClick={() => setIsAddingTest(false)}
                  className="close-button"
                  style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Test Name</label>
                  <input
                    type="text"
                    value={newTest.name}
                    onChange={(e) => setNewTest({...newTest, name: e.target.value})}
                    className="form-input"
                    placeholder="e.g., Depression Assessment"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    value={newTest.description}
                    onChange={(e) => setNewTest({...newTest, description: e.target.value})}
                    className="form-textarea"
                    placeholder="Brief description of what this test assesses"
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Computation Logic</label>
                  <input
                    type="text"
                    value={newTest.computation_logic}
                    onChange={(e) => setNewTest({...newTest, computation_logic: e.target.value})}
                    className="form-input"
                    placeholder="e.g., 40% voice + 30% sentiment + 30% stress"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  onClick={() => setIsAddingTest(false)}
                  className="secondary-button"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddTest}
                  className="primary-button"
                  disabled={!newTest.name.trim()}
                >
                  <Save /> Save Test
                </button>
              </div>
            </div>
          </div>
        )}

        {editingTest && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3 style={{ margin: 0 }}>Edit Test Category</h3>
                <button 
                  onClick={() => setEditingTest(null)}
                  className="close-button"
                  style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Test Name</label>
                  <input
                    type="text"
                    value={editingTest.name}
                    onChange={(e) => setEditingTest({...editingTest, name: e.target.value})}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    value={editingTest.description}
                    onChange={(e) => setEditingTest({...editingTest, description: e.target.value})}
                    className="form-textarea"
                    rows="3"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  onClick={() => setEditingTest(null)}
                  className="secondary-button"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveEdit}
                  className="primary-button"
                >
                  <Save /> Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid">
          {testCategories.map((test) => (
            <div key={test.id} className="card test-card">
              <div className="test-card-header">
                <h4 className="test-card-title">{test.name}</h4>
                <div className="action-buttons">
                  <button 
                    onClick={() => setEditingTest({...test})}
                    className="icon-button-small"
                  >
                    <Edit />
                  </button>
                  <button 
                    onClick={() => handleDeleteTest(test.id)}
                    className="icon-button-small"
                    style={{ color: '#ff5252' }}
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
              <p className="test-card-desc">{test.description}</p>
              <div className="test-card-meta">
                <div className="test-card-meta-item">
                  <span className="meta-label">Logic:</span>
                  <span className="meta-value">{test.computation_logic || 'Standard scoring'}</span>
                </div>
                <div className="test-card-meta-item">
                  <span className="meta-label">Created:</span>
                  <span className="meta-value">{test.created_at}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Questions Management Component
  const QuestionsManagement = () => {
    const [isAddingQuestion, setIsAddingQuestion] = useState(false);
    const [isUploadingPDF, setIsUploadingPDF] = useState(false);
    const [newQuestion, setNewQuestion] = useState({
      text: '',
      test_id: '',
      category: ''
    });
    const [pdfFile, setPdfFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleAddQuestion = () => {
      const question = {
        id: questions.length + 1,
        ...newQuestion,
        test_name: testCategories.find(t => t.id == newQuestion.test_id)?.name || 'General',
        created_at: new Date().toISOString()
      };
      
      setQuestions([...questions, question]);
      setIsAddingQuestion(false);
      setNewQuestion({ text: '', test_id: '', category: '' });
      alert('Question added successfully!');
    };

    const handleUploadPDF = () => {
      if (!pdfFile) {
        alert('Please select a PDF file');
        return;
      }

      setIsUploadingPDF(true);
      setUploadProgress(0);
      
      // Mock upload process
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      setTimeout(() => {
        clearInterval(interval);
        setIsUploadingPDF(false);
        setPdfFile(null);
        setUploadProgress(0);
        
        // Add mock questions from PDF
        const mockQuestions = [
          {
            id: questions.length + 1,
            text: "How often have you felt nervous, anxious, or on edge over the last 2 weeks?",
            test_id: 3,
            test_name: "Anxiety Assessment",
            created_at: new Date().toISOString()
          },
          {
            id: questions.length + 2,
            text: "How often have you had little interest or pleasure in doing things?",
            test_id: 2,
            test_name: "Depression Assessment",
            created_at: new Date().toISOString()
          }
        ];
        
        setQuestions([...questions, ...mockQuestions]);
        alert('Successfully uploaded PDF and extracted 2 questions!');
      }, 2000);
    };

    const handleDeleteQuestion = (id) => {
      if (window.confirm('Are you sure you want to delete this question?')) {
        setQuestions(questions.filter(q => q.id !== id));
        alert('Question deleted!');
      }
    };

    return (
      <div className="content">
        <div className="page-header">
          <div>
            <h2 className="page-title">Assessment Questions</h2>
            <p className="page-subtitle">Manage questions for all test categories</p>
          </div>
          <div className="button-group">
            <button 
              onClick={() => setIsUploadingPDF(true)}
              className="secondary-button"
            >
              <Upload /> Upload PDF
            </button>
            <button 
              onClick={() => setIsAddingQuestion(true)}
              className="primary-button"
            >
              <Plus /> Add Question
            </button>
          </div>
        </div>

        {isAddingQuestion && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3 style={{ margin: 0 }}>Add New Question</h3>
                <button 
                  onClick={() => setIsAddingQuestion(false)}
                  className="close-button"
                  style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Question Text</label>
                  <textarea
                    value={newQuestion.text}
                    onChange={(e) => setNewQuestion({...newQuestion, text: e.target.value})}
                    className="form-textarea"
                    placeholder="Enter the question here..."
                    rows="4"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Test Category</label>
                  <select
                    value={newQuestion.test_id}
                    onChange={(e) => setNewQuestion({...newQuestion, test_id: e.target.value})}
                    className="form-select"
                  >
                    <option value="">Select a test category</option>
                    {testCategories.map(test => (
                      <option key={test.id} value={test.id}>{test.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Category Tag</label>
                  <input
                    type="text"
                    value={newQuestion.category}
                    onChange={(e) => setNewQuestion({...newQuestion, category: e.target.value})}
                    className="form-input"
                    placeholder="e.g., mood, anxiety, sleep"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  onClick={() => setIsAddingQuestion(false)}
                  className="secondary-button"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddQuestion}
                  className="primary-button"
                  disabled={!newQuestion.text.trim() || !newQuestion.test_id}
                >
                  <Save /> Save Question
                </button>
              </div>
            </div>
          </div>
        )}

        {isUploadingPDF && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3 style={{ margin: 0 }}>Upload Questions from PDF</h3>
                <button 
                  onClick={() => setIsUploadingPDF(false)}
                  className="close-button"
                  style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <div className="upload-area">
                  <div className="upload-icon">
                    <span style={{ fontSize: '40px' }}>📄</span>
                  </div>
                  <p className="upload-text">Drag & drop a PDF file or click to browse</p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setPdfFile(e.target.files[0])}
                    className="file-input"
                    id="pdfUpload"
                  />
                  <label htmlFor="pdfUpload" className="file-button">
                    Choose PDF File
                  </label>
                  {pdfFile && (
                    <div className="file-info">
                      <span>📄 {pdfFile.name}</span>
                      <span>{(pdfFile.size / 1024).toFixed(2)} KB</span>
                    </div>
                  )}
                </div>
                
                {uploadProgress > 0 && (
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <div className="progress-text">
                      Uploading: {uploadProgress}%
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button 
                  onClick={() => setIsUploadingPDF(false)}
                  className="secondary-button"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleUploadPDF}
                  className="primary-button"
                  disabled={!pdfFile || uploadProgress > 0}
                >
                  {uploadProgress > 0 ? 'Uploading...' : 'Upload & Extract'}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th className="table-header">ID</th>
                <th className="table-header">Question Text</th>
                <th className="table-header">Category</th>
                <th className="table-header">Created</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id} className="table-row">
                  <td className="table-cell">#{question.id}</td>
                  <td className="table-cell">{question.text}</td>
                  <td className="table-cell">
                    <span className="category-badge">
                      {question.test_name}
                    </span>
                  </td>
                  <td className="table-cell">
                    {new Date(question.created_at).toLocaleDateString()}
                  </td>
                  <td className="table-cell">
                    <div className="action-buttons">
                      <button 
                        onClick={() => alert('Edit functionality would open here')}
                        className="icon-button"
                      >
                        <Edit />
                      </button>
                      <button 
                        onClick={() => handleDeleteQuestion(question.id)}
                        className="icon-button"
                        style={{ color: '#ff5252', borderColor: '#ffd6d6' }}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Reports Management Component
  const ReportsManagement = () => {
    const [filters, setFilters] = useState({
      dateRange: 'all',
      riskLevel: 'all',
      testType: 'all'
    });
    const [selectedReports, setSelectedReports] = useState([]);

    const handleExport = (format) => {
      alert(`Exporting ${reports.length} reports as ${format.toUpperCase()}...\n\nIn real implementation, this would download the file.`);
    };

    const toggleSelectReport = (id) => {
      setSelectedReports(prev => 
        prev.includes(id) 
          ? prev.filter(reportId => reportId !== id)
          : [...prev, id]
      );
    };

    const handleBulkAction = (action) => {
      if (selectedReports.length === 0) {
        alert('Please select reports first');
        return;
      }

      switch(action) {
        case 'flag':
          alert(`Flagging ${selectedReports.length} reports...`);
          break;
        case 'archive':
          alert(`Archiving ${selectedReports.length} reports...`);
          break;
        case 'delete':
          if (window.confirm(`Delete ${selectedReports.length} selected reports?`)) {
            setReports(reports.filter(r => !selectedReports.includes(r.id)));
            setSelectedReports([]);
            alert('Reports deleted!');
          }
          break;
      }
    };

    return (
      <div className="content">
        <div className="page-header">
          <div>
            <h2 className="page-title">User Assessment Reports</h2>
            <p className="page-subtitle">Monitor and analyze mental health evaluation results</p>
          </div>
          <div className="button-group">
            <button 
              onClick={() => handleExport('csv')}
              className="secondary-button"
            >
              <Download /> Export CSV
            </button>
            <button 
              onClick={() => alert('Opening detailed analytics...')}
              className="primary-button"
            >
              <BarChart3 /> Generate Analytics
            </button>
          </div>
        </div>

        <div className="filters-container">
          <div className="filter-group">
            <label className="filter-label">Date Range:</label>
            <select 
              value={filters.dateRange}
              onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
              className="filter-select"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Risk Level:</label>
            <select 
              value={filters.riskLevel}
              onChange={(e) => setFilters({...filters, riskLevel: e.target.value})}
              className="filter-select"
            >
              <option value="all">All Levels</option>
              <option value="high">High Risk Only</option>
              <option value="moderate">Moderate Only</option>
              <option value="low">Low Risk Only</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Test Type:</label>
            <select 
              value={filters.testType}
              onChange={(e) => setFilters({...filters, testType: e.target.value})}
              className="filter-select"
            >
              <option value="all">All Tests</option>
              <option value="general">General Screening</option>
              <option value="depression">Depression</option>
              <option value="anxiety">Anxiety</option>
            </select>
          </div>

          <div className="bulk-actions">
            <span className="selected-count">
              {selectedReports.length} selected
            </span>
            <button 
              onClick={() => handleBulkAction('flag')}
              className="small-button"
              disabled={selectedReports.length === 0}
            >
              <AlertTriangle /> Flag
            </button>
            <button 
              onClick={() => handleBulkAction('archive')}
              className="small-button"
              disabled={selectedReports.length === 0}
            >
              📁 Archive
            </button>
            <button 
              onClick={() => handleBulkAction('delete')}
              className="small-button"
              style={{ backgroundColor: '#ffeaea', color: '#ff5252' }}
              disabled={selectedReports.length === 0}
            >
              <Trash2 /> Delete
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th className="table-header">
                  <input
                    type="checkbox"
                    checked={selectedReports.length === reports.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedReports(reports.map(r => r.id));
                      } else {
                        setSelectedReports([]);
                      }
                    }}
                  />
                </th>
                <th className="table-header">User</th>
                <th className="table-header">Test Type</th>
                <th className="table-header">Scores</th>
                <th className="table-header">Risk Level</th>
                <th className="table-header">Date</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="table-row">
                  <td className="table-cell">
                    <input
                      type="checkbox"
                      checked={selectedReports.includes(report.id)}
                      onChange={() => toggleSelectReport(report.id)}
                    />
                  </td>
                  <td className="table-cell">
                    <div className="user-cell">
                      <div className="user-avatar-small">
                        <User />
                      </div>
                      <div>
                        <div className="user-name-small">User #{report.user_id}</div>
                        <div className="user-id">Assessment #{report.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell">{report.test_name}</td>
                  <td className="table-cell">
                    <div className="score-cell">
                      <div className="score-item">
                        <div className="score-label">Depression</div>
                        <div className="score-value" style={{
                          color: report.depression_score > 10 ? '#ff5252' : '#00a86b'
                        }}>
                          {report.depression_score}/27
                        </div>
                      </div>
                      <div className="score-item">
                        <div className="score-label">Anxiety</div>
                        <div className="score-value" style={{
                          color: report.anxiety_score > 10 ? '#ff9800' : '#00a86b'
                        }}>
                          {report.anxiety_score}/21
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell">
                    <RiskBadge level={
                      report.overall_state?.toLowerCase().includes('severe') ? 'high' :
                      report.overall_state?.toLowerCase().includes('moderate') ? 'moderate' : 'low'
                    } />
                  </td>
                  <td className="table-cell">
                    {new Date(report.created_at).toLocaleDateString()}
                  </td>
                  <td className="table-cell">
                    <div className="action-buttons">
                      <button 
                        onClick={() => {
                          alert(`Viewing details for Report #${report.id}\n\nUser: ${report.user_id}\nTest: ${report.test_name}\nDepression: ${report.depression_score}\nAnxiety: ${report.anxiety_score}\nRisk: ${report.overall_state}`);
                        }}
                        className="icon-button"
                      >
                        <Eye /> View
                      </button>
                      <button 
                        onClick={() => alert('Opening recommendation interface...')}
                        className="icon-button"
                      >
                        💡 Recommend
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="pagination-button" disabled>
            ← Previous
          </button>
          <span className="pagination-info">
            Showing 1-{reports.length} of {reports.length} reports
          </span>
          <button className="pagination-button">
            Next →
          </button>
        </div>
      </div>
    );
  };

  // User Management Component
  const UserManagement = () => (
    <div className="content">
      <div className="page-header">
        <div>
          <h2 className="page-title">User Management</h2>
          <p className="page-subtitle">Manage user accounts and permissions</p>
        </div>
        <button 
          onClick={() => alert('Add user functionality would open here')}
          className="primary-button"
        >
          <Plus /> Add New User
        </button>
      </div>
      
      <div className="placeholder-section">
        <div className="placeholder-icon">
          <span style={{ fontSize: '60px' }}><Users /></span>
        </div>
        <h3 className="placeholder-title">User Management</h3>
        <p className="placeholder-text">
          This section allows you to manage all user accounts, view user history,
          and set permissions for different admin roles.
        </p>
        <div className="placeholder-actions">
          <button 
            onClick={() => alert('View all users')}
            className="primary-button"
          >
            View All Users
          </button>
          <button 
            onClick={() => alert('Export user data')}
            className="secondary-button"
          >
            Export User Data
          </button>
        </div>
      </div>
    </div>
  );

  // System Settings Component
  const SystemSettings = () => (
    <div className="content">
      <div className="page-header">
        <h2 className="page-title">System Settings</h2>
        <p className="page-subtitle">Configure system preferences and security</p>
      </div>
      
      <div className="settings-grid">
        <div className="card">
          <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>General Settings</h4>
          <div className="setting-item">
            <label className="setting-label">System Name</label>
            <input 
              type="text" 
              defaultValue="NeuroCare Admin" 
              className="setting-input"
            />
          </div>
          <div className="setting-item">
            <label className="setting-label">Time Zone</label>
            <select className="setting-select">
              <option>UTC</option>
              <option>EST</option>
              <option>PST</option>
            </select>
          </div>
          <button className="primary-button" onClick={() => alert('Settings saved!')}>Save Changes</button>
        </div>
        
        <div className="card">
          <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Security Settings</h4>
          <div className="setting-item">
            <label className="setting-label">Session Timeout</label>
            <select className="setting-select">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
            </select>
          </div>
          <div className="setting-item">
            <label className="setting-label">Two-Factor Authentication</label>
            <div className="toggle-switch">
              <span>OFF</span>
              <div className="toggle-slider"></div>
              <span>ON</span>
            </div>
          </div>
          <button className="primary-button" onClick={() => alert('Security settings updated!')}>Update Security</button>
        </div>
        
        <div className="card">
          <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Data Management</h4>
          <div className="setting-item">
            <label className="setting-label">Auto Backup</label>
            <select className="setting-select">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="setting-item">
            <label className="setting-label">Data Retention</label>
            <select className="setting-select">
              <option>1 year</option>
              <option>2 years</option>
              <option>5 years</option>
            </select>
          </div>
          <button className="primary-button" onClick={() => alert('Data configuration saved!')}>Configure Data</button>
        </div>
      </div>
    </div>
  );

  // Loading State
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f7fa' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px', animation: 'pulse 2s infinite' }}>🧠</div>
          <p style={{ fontSize: '16px', color: '#666' }}>Loading NeuroCare Admin...</p>
        </div>
      </div>
    );
  }

  // Render Login or Dashboard
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="app-container">
      <DashboardHeader />
      <div className="main-layout">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;
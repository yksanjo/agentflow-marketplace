import { User, Category, Workflow, Review, DashboardStats } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Chen',
    username: 'alexchen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    bio: 'Full-stack developer passionate about automation and developer tools.',
    isCreator: true,
    totalSales: 1247,
    rating: 4.9,
    joinedAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sarah Miller',
    username: 'sarahm',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    bio: 'DevOps engineer specializing in CI/CD and GitHub Actions.',
    isCreator: true,
    totalSales: 892,
    rating: 4.8,
    joinedAt: '2024-02-20',
  },
  {
    id: '3',
    name: 'James Wilson',
    username: 'jamesw',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
    bio: 'Building the future of AI-powered development workflows.',
    isCreator: true,
    totalSales: 2341,
    rating: 4.7,
    joinedAt: '2023-11-08',
  },
  {
    id: '4',
    name: 'Emma Davis',
    username: 'emmad',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
    bio: 'Open source enthusiast and automation advocate.',
    isCreator: true,
    totalSales: 567,
    rating: 4.6,
    joinedAt: '2024-03-12',
  },
  {
    id: '5',
    name: 'Michael Brown',
    username: 'michaelb',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
    isCreator: false,
    joinedAt: '2024-05-01',
  },
];

export const currentUser: User = mockUsers[4];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'CI/CD & Automation',
    slug: 'cicd-automation',
    icon: 'Rocket',
    workflowCount: 234,
    description: 'Continuous integration and deployment workflows',
  },
  {
    id: '2',
    name: 'Code Review',
    slug: 'code-review',
    icon: 'GitPullRequest',
    workflowCount: 156,
    description: 'Automated code review and quality checks',
  },
  {
    id: '3',
    name: 'Testing',
    slug: 'testing',
    icon: 'TestTube',
    workflowCount: 189,
    description: 'Automated testing and coverage workflows',
  },
  {
    id: '4',
    name: 'Security',
    slug: 'security',
    icon: 'Shield',
    workflowCount: 98,
    description: 'Security scanning and vulnerability detection',
  },
  {
    id: '5',
    name: 'Documentation',
    slug: 'documentation',
    icon: 'FileText',
    workflowCount: 67,
    description: 'Auto-generate docs from code',
  },
  {
    id: '6',
    name: 'AI & ML',
    slug: 'ai-ml',
    icon: 'Brain',
    workflowCount: 145,
    description: 'Machine learning model training and deployment',
  },
];

export const mockWorkflows: Workflow[] = [
  {
    id: '1',
    title: 'Auto PR Reviewer',
    slug: 'auto-pr-reviewer',
    description: 'Automatically review pull requests with AI-powered insights and suggest improvements.',
    longDescription: `This workflow uses advanced AI models to analyze your pull requests and provide detailed code reviews. It checks for:

- Code quality and best practices
- Potential bugs and security vulnerabilities
- Performance optimization opportunities
- Documentation completeness
- Test coverage suggestions

The workflow runs automatically on every PR and posts comments with actionable feedback.`,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    price: 29,
    category: mockCategories[1],
    creator: mockUsers[0],
    rating: 4.8,
    reviewCount: 156,
    installCount: 2341,
    tags: ['AI', 'Code Review', 'Pull Request', 'Automation'],
    version: '2.1.0',
    lastUpdated: '2024-12-15',
    featured: true,
    files: [
      { name: 'pr-review.yml', path: '.github/workflows/pr-review.yml', description: 'Main workflow file' },
      { name: 'reviewer.py', path: 'scripts/reviewer.py', description: 'AI review script' },
    ],
    requirements: ['GitHub Pro', 'OpenAI API key'],
  },
  {
    id: '2',
    title: 'Deploy Master',
    slug: 'deploy-master',
    description: 'One-click deployment to multiple cloud providers with rollback support.',
    longDescription: `Deploy Master simplifies your deployment pipeline with support for:

- AWS, GCP, Azure, and Vercel
- Automatic rollback on failure
- Environment-specific configurations
- Deployment notifications
- History and audit logs

Perfect for teams wanting reliable deployments without the complexity.`,
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop',
    price: 49,
    category: mockCategories[0],
    creator: mockUsers[1],
    rating: 4.9,
    reviewCount: 89,
    installCount: 892,
    tags: ['Deployment', 'CI/CD', 'Cloud', 'DevOps'],
    version: '3.0.1',
    lastUpdated: '2024-12-20',
    featured: true,
    files: [
      { name: 'deploy.yml', path: '.github/workflows/deploy.yml', description: 'Deployment workflow' },
      { name: 'deploy.sh', path: 'scripts/deploy.sh', description: 'Deployment script' },
    ],
    requirements: ['GitHub Actions', 'Cloud provider credentials'],
  },
  {
    id: '3',
    title: 'Test Suite Pro',
    slug: 'test-suite-pro',
    description: 'Comprehensive testing workflow with coverage reports and parallel execution.',
    longDescription: `Test Suite Pro runs your tests efficiently with:

- Parallel test execution
- Coverage reports with PR comments
- Performance benchmarking
- Flaky test detection
- Test history tracking

Supports Jest, pytest, go test, and more.`,
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
    price: 0,
    category: mockCategories[2],
    creator: mockUsers[2],
    rating: 4.7,
    reviewCount: 234,
    installCount: 5678,
    tags: ['Testing', 'Coverage', 'Quality Assurance'],
    version: '1.5.0',
    lastUpdated: '2024-11-28',
    featured: true,
    files: [
      { name: 'test.yml', path: '.github/workflows/test.yml', description: 'Test workflow' },
    ],
    requirements: [],
  },
  {
    id: '4',
    title: 'Security Scanner',
    slug: 'security-scanner',
    description: 'Multi-layer security scanning for your repositories with vulnerability alerts.',
    longDescription: `Keep your code secure with:

- Dependency vulnerability scanning
- Secret detection
- Code security analysis
- License compliance checks
- Custom security rules

Enterprise-grade security made simple.`,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    price: 29,
    category: mockCategories[3],
    creator: mockUsers[1],
    rating: 4.6,
    reviewCount: 67,
    installCount: 543,
    tags: ['Security', 'Vulnerability', 'Scanner'],
    version: '2.0.0',
    lastUpdated: '2024-12-10',
    featured: false,
    files: [
      { name: 'security.yml', path: '.github/workflows/security.yml', description: 'Security scanning workflow' },
    ],
    requirements: ['GitHub Advanced Security (optional)'],
  },
  {
    id: '5',
    title: 'Auto Docs Generator',
    slug: 'auto-docs-generator',
    description: 'Automatically generate and publish documentation from your codebase.',
    longDescription: `Never write docs manually again:

- API documentation from code
- README auto-generation
- Changelog creation
- Version documentation
- Multi-format output (MD, HTML, PDF)

Supports TypeScript, Python, Go, and more.`,
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    price: 15,
    category: mockCategories[4],
    creator: mockUsers[3],
    rating: 4.5,
    reviewCount: 45,
    installCount: 321,
    tags: ['Documentation', 'Automation', 'API'],
    version: '1.2.0',
    lastUpdated: '2024-12-05',
    featured: false,
    files: [
      { name: 'docs.yml', path: '.github/workflows/docs.yml', description: 'Documentation workflow' },
    ],
    requirements: [],
  },
  {
    id: '6',
    title: 'ML Pipeline Runner',
    slug: 'ml-pipeline-runner',
    description: 'End-to-end machine learning pipeline with model training and deployment.',
    longDescription: `Build and deploy ML models:

- Data preprocessing
- Model training with hyperparameter tuning
- Model evaluation and metrics
- Artifact management
- Deployment to cloud endpoints

PyTorch, TensorFlow, and sklearn compatible.`,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    price: 49,
    category: mockCategories[5],
    creator: mockUsers[0],
    rating: 4.9,
    reviewCount: 78,
    installCount: 654,
    tags: ['Machine Learning', 'ML', 'AI', 'Pipeline'],
    version: '2.2.0',
    lastUpdated: '2024-12-18',
    featured: true,
    files: [
      { name: 'ml-pipeline.yml', path: '.github/workflows/ml-pipeline.yml', description: 'ML pipeline workflow' },
      { name: 'train.py', path: 'scripts/train.py', description: 'Training script' },
      { name: 'evaluate.py', path: 'scripts/evaluate.py', description: 'Evaluation script' },
    ],
    requirements: ['GPU runners (optional)', 'ML platform credentials'],
  },
  {
    id: '7',
    title: 'Release Manager',
    slug: 'release-manager',
    description: 'Automated release workflow with changelog generation and version management.',
    longDescription: `Streamline your release process:

- Semantic versioning
- Changelog auto-generation
- Git tag management
- Release notes creation
- Multi-platform artifacts

Perfect for npm, PyPI, and container releases.`,
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop',
    price: 0,
    category: mockCategories[0],
    creator: mockUsers[2],
    rating: 4.4,
    reviewCount: 112,
    installCount: 3421,
    tags: ['Release', 'Versioning', 'CI/CD'],
    version: '1.8.0',
    lastUpdated: '2024-11-15',
    featured: false,
    files: [
      { name: 'release.yml', path: '.github/workflows/release.yml', description: 'Release workflow' },
    ],
    requirements: [],
  },
  {
    id: '8',
    title: 'Code Formatter',
    slug: 'code-formatter',
    description: 'Enforce code style with automatic formatting on every push.',
    longDescription: `Keep your codebase clean:

- Auto-format on push
- Linting with configurable rules
- PR checks before merge
- Style consistency enforcement
- Multi-language support

Prettier, ESLint, Black, and more.`,
    thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
    price: 0,
    category: mockCategories[1],
    creator: mockUsers[3],
    rating: 4.6,
    reviewCount: 189,
    installCount: 4523,
    tags: ['Formatting', 'Linting', 'Code Style'],
    version: '2.0.0',
    lastUpdated: '2024-12-01',
    featured: false,
    files: [
      { name: 'format.yml', path: '.github/workflows/format.yml', description: 'Format workflow' },
    ],
    requirements: [],
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    workflowId: '1',
    user: mockUsers[4],
    rating: 5,
    title: 'Game changer for our code reviews!',
    content: 'This workflow has completely transformed how we do code reviews. The AI suggestions are incredibly helpful and have caught several bugs before they made it to production. Highly recommended!',
    helpfulCount: 47,
    verified: true,
    createdAt: '2024-12-10',
    creatorResponse: {
      content: 'Thank you so much for the kind words! We are constantly improving the AI models. Stay tuned for more features!',
      createdAt: '2024-12-11',
    },
  },
  {
    id: '2',
    workflowId: '1',
    user: mockUsers[3],
    rating: 4,
    title: 'Great workflow, needs more customization',
    content: 'The workflow works great and the reviews are detailed. I wish there were more options to customize the AI behavior, but overall very satisfied.',
    helpfulCount: 23,
    verified: true,
    createdAt: '2024-12-08',
  },
  {
    id: '3',
    workflowId: '2',
    user: mockUsers[4],
    rating: 5,
    title: 'Best deployment workflow I have used',
    content: 'Deploy Master has saved us countless hours. The rollback feature alone is worth the price. Support team is also very responsive.',
    helpfulCount: 31,
    verified: true,
    createdAt: '2024-12-15',
  },
  {
    id: '4',
    workflowId: '3',
    user: mockUsers[0],
    rating: 5,
    title: 'Free but premium quality',
    content: 'Cannot believe this is free! Works better than many paid alternatives. The parallel execution has cut our CI time in half.',
    helpfulCount: 89,
    verified: true,
    createdAt: '2024-11-20',
  },
  {
    id: '5',
    workflowId: '6',
    user: mockUsers[1],
    rating: 5,
    title: 'Perfect for ML projects',
    content: 'As someone who works on ML projects, this workflow is a blessing. Handles everything from data prep to deployment. The hyperparameter tuning feature is amazing!',
    helpfulCount: 28,
    verified: true,
    createdAt: '2024-12-12',
  },
];

export const mockDashboardStats: DashboardStats = {
  totalViews: 45678,
  totalInstalls: 8934,
  totalRevenue: 45678,
  pendingPayout: 2345,
  monthlyViews: 12345,
  monthlyInstalls: 2345,
  monthlyRevenue: 12345,
};

export const mockCreatorWorkflows: (Workflow & { views: number; installs: number; revenue: number })[] = [
  {
    ...mockWorkflows[0],
    views: 12345,
    installs: 2341,
    revenue: 67890,
  },
  {
    ...mockWorkflows[5],
    views: 8765,
    installs: 654,
    revenue: 32046,
  },
];

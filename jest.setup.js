// jest.setup.js
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/router';
import 'setimmediate';


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
  ToastContainer: () => <div />,
}));

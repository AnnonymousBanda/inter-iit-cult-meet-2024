import path from 'path';

const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(''); // Set alias for '@' to the root directory
    return config;
  },
};

export default nextConfig;

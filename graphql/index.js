const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Missions {
    name: String
    flight: Int
  }

  type Capsule {
    capsule_serial: String
    capsule_id: String
    status: String
    original_launch: String
    missions: [Missions]
    landings: Int
    type: String
    details: String
    reuse_count: Int
  }

  type Core {
    core_serial: String
    block: Int
    status: String
    original_launch: String
    missions: [Missions]
    reuse_count: Int
    rtls_attempts: Int
    rtls_landings: Int
    asds_attempts: Int
    asds_landings: Int
    water_landing: Boolean
    details: String
  }

  type Dragon {
    id: String
    name: String
    type: String
    active: Boolean
    crew_capacity: Int
    sidewall_angle_deg: Int
    orbit_duration_yr: Int
    dry_mass_kg: Int
    dry_mass_lb: Int
    first_flight: String
  }

  type Links {
    reddit: String
    article: String
    wikipedia: String
  }

  type History {
    id: String
    title: String
    event_date_utc: String
    flight_number: Int
    details: String
    links: Links
  }

  type Location {
    name: String
    region: String
    latitude: Float
    longitude: Float
  }

  type LandPad {
    id: String
    full_name: String
    status: String
    location: Location
    landing_type: String
    attempted_landings: Int
    successful_landings: Int
    wikipedia: String
    details: String
  }

  type LaunchPad {
    id: Int
    status: String
    location: Location
    vehicles_launched: [String]
    attempted_launches: Int
    successful_launches: Int
    wikipedia: String
    details: String
    site_id: String
    site_name_long: String
  }

  type Query {
    allCapsules: [Capsule]
    oneCapsule(capsule_serial: String!): Capsule
    allCores: [Core]
    oneCore(core_serial: String!): Core
    allDragons: [Dragon]
    oneDragon(id: String!): Dragon
    allHistories: [History]
    oneHistory(id: String!): History
    allLandPads: [LandPad]
    oneLandPad(id: String!): LandPad
    allLaunchPads: [LaunchPad]
    oneLaunchPad(site_id: String!): LaunchPad
  }
`;

const resolvers = {
  Query: {
    allCapsules: async (root, {}, { dataSources }) => {
      const capsules = await dataSources.spacexAPI.getCapsules();
      console.log('capsules', capsules);
      return capsules;
    },
    oneCapsule: async (root, { capsule_serial }, { dataSources }) => {
      const capsule = await dataSources.spacexAPI.getCapsule(capsule_serial);
      return capsule;
    },
    allCores: async (root, {}, { dataSources }) => {
      const cores = await dataSources.spacexAPI.getCores();
      return cores;
    },
    oneCore: async (root, { core_serial }, { dataSources }) => {
      const core = await dataSources.spacexAPI.getCore(core_serial);
      return core;
    },
    allDragons: async (root, {}, { dataSources }) => {
      const dragons = await dataSources.spacexAPI.getDragons();
      const { id, name } = dragons[0];
      return dragons;
    },
    oneDragon: async (root, { id }, { dataSources }) => {
      const dragon = await dataSources.spacexAPI.getDragon(id);
      const { name, type } = dragon;
      return { id, name, type };
    },
    allHistories: async (root, {}, { dataSources }) => {
      const histories = await dataSources.spacexAPI.getHistories();
      return histories;
    },
    oneHistory: async (root, { id }, { dataSources }) => {
      const history = await dataSources.spacexAPI.getHistory(id);
      return history;
    },
    allLandPads: async (root, {}, { dataSources }) => {
      const landPads = await dataSources.spacexAPI.getLandingPads();
      return history;
    },
    oneLandPad: async (root, { id }, { dataSources }) => {
      const landPad = await dataSources.spacexAPI.getLandingPad(id);
      return landPad;
    },
    allLaunchPads: async (root, {}, { dataSources }) => {
      const launchPads = await dataSources.spacexAPI.getLaunchPads();
      return launchPads;
    },
    oneLaunchPad: async (root, { site_id }, { dataSources }) => {
      const launchPad = await dataSources.spacexAPI.getLaunchPad(site_id);
      return launchPad;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

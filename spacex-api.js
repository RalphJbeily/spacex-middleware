const { RESTDataSource } = require('apollo-datasource-rest');
const dotenv = require('dotenv');

dotenv.config({ silent: true });
const { SPACEX_API_URL } = process.env;

module.exports = class SpaceXAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${SPACEX_API_URL}`;
  }

  async getCapsules() {
    return this.get('capsules/');
  }

  async getCapsule(capsule_serial) {
    return this.get(`capsules/${capsule_serial}`);
  }

  async getCores() {
    return this.get('cores/');
  }

  async getCore(core_serial) {
    return this.get(`cores/${core_serial}`);
  }

  async getDragons() {
    return this.get('dragons/');
  }

  async getDragon(id) {
    return this.get(`dragons/${id}`);
  }

  async getHistories() {
    return this.get('history');
  }

  async getHistory(id) {
    return this.get(`history/${id}`);
  }

  async getLandingPads() {
    return this.get('landpads');
  }

  async getLandingPad(id) {
    return this.get(`landpads/${id}`);
  }

  async getLaunchPads() {
    return this.get('launchpads');
  }

  async getLaunchPad(site_id) {
    return this.get(`launchpads/${site_id}`);
  }
};

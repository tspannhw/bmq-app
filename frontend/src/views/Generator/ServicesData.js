const servicesData = [{id: 1, description: 'UTILITIES', cluster_id: 1, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 2, description: 'UTILITIES', cluster_id: 2, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 3, description: 'UTILITIES', cluster_id: 3, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 4, description: 'HDFS', cluster_id: 1, mandatory: 1, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/hdfs_128.png', dependency: []},
{id: 5, description: 'HDFS', cluster_id: 3, mandatory: 1, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/hdfs_128.png', dependency: []},
{id: 6, description: 'YARN', cluster_id: 1, mandatory: 1, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 7, description: 'YARN', cluster_id: 3, mandatory: 1, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 8, description: 'HIVE', cluster_id: 1, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/hive_128.png', dependency: []},
{id: 9, description: 'HIVE', cluster_id: 3, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/hive_128.png', dependency: []},
{id: 10, description: 'HBASE', cluster_id: 1, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/hbase_128.png', dependency: []},
{id: 11, description: 'HBASE', cluster_id: 3, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/hbase_128.png', dependency: []},
{id: 12, description: 'SPARK', cluster_id: 1, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/spark_128.png', dependency: []},
{id: 13, description: 'SPARK', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/spark_128.png', dependency: []},
{id: 14, description: 'DRUID', cluster_id: 1, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/druid_128.png', dependency: []},
{id: 15, description: 'DRUID', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/druid_128.png', dependency: []},
{id: 16, description: 'SUPERSET', cluster_id: 1, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/superset_128.png', dependency: []},
{id: 17, description: 'SUPERSET', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/superset_128.png', dependency: []},
{id: 18, description: 'KAFKA', cluster_id: 1, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/kafka_128.png', dependency: []},
{id: 19, description: 'KAFKA', cluster_id: 2, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/kafka_128.png', dependency: []},
{id: 20, description: 'KAFKA', cluster_id: 3, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/kafka_128.png', dependency: []},
{id: 21, description: 'ZEPELLIN', cluster_id: 1, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/zeppelin_128.png', dependency: []},
{id: 22, description: 'ZEPELLIN', cluster_id: 3, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/zeppelin_128.png', dependency: []},
{id: 23, description: 'ATLAS', cluster_id: 1, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: [18]},
{id: 24, description: 'ATLAS', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: [20]},
{id: 25, description: 'RANGER', cluster_id: 1, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 26, description: 'RANGER', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 27, description: 'KNOX', cluster_id: 1, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 28, description: 'KNOX', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 29, description: 'NIFI', cluster_id: 2, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/nifi_128.png', dependency: [31]},
{id: 30, description: 'NIFI', cluster_id: 3, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/nifi_128.png', dependency: [32]},
{id: 31, description: 'NIFI REGISTRY', cluster_id: 2, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 32, description: 'NIFI REGISTRY', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 33, description: 'SCHEMA REGISTRY', cluster_id: 2, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 34, description: 'SCHEMA REGISTRY', cluster_id: 3, mandatory: 0, extensible: 1,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 35, description: 'STORM', cluster_id: 2, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/storm_128.png', dependency: []},
{id: 36, description: 'STORM', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/storm_128.png', dependency: []},
{id: 37, description: 'SAM', cluster_id: 2, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 38, description: 'SAM', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 39, description: 'SOLR', cluster_id: 1, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/solr_128.png', dependency: []},
{id: 40, description: 'SOLR', cluster_id: 3, mandatory: 0, extensible: 0,  display: 1,  img: '../../assets/img/cuisine/solr_128.png', dependency: []},
{id: 41, description: 'ZOOKEEPER', cluster_id: 1, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 42, description: 'ZOOKEEPER', cluster_id: 2, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 43, description: 'ZOOKEEPER', cluster_id: 3, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 44, description: 'MAPREDUCE2', cluster_id: 1, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 45, description: 'MAPREDUCE2', cluster_id: 3, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 46, description: 'AMBARI_METRICS', cluster_id: 1, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 47, description: 'AMBARI_METRICS', cluster_id: 2, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []},
{id: 48, description: 'AMBARI_METRICS', cluster_id: 3, mandatory: 1, extensible: 0,  display: 0,  img: '../../assets/img/cuisine/default_service.png', dependency: []}]

export default servicesData
